using System.Threading.Tasks;
using AutoMapper;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using OMPhoenix.API.Data;
using OMPhoenix.API.Dtos;
using OMPhoenix.API.Helpers;
using OMPhoenix.API.Models;

namespace OMPhoenix.API.Controllers
{
    [Authorize]
    [Route("api/machine/{machineId}/upload")]
    [ApiController]
    public class UploadController : ControllerBase
    {
        private readonly IEntityRepository _entityRepository;
        private readonly IMapper _mapper;
        private readonly IOptions<CloudinarySettings> _cloudinaryConfig;
        private Cloudinary _cloudinary;

        public UploadController(IEntityRepository entityRepository, IMapper mapper, 
                                    IOptions<CloudinarySettings> cloudinaryConfig)
        {
            _cloudinaryConfig = cloudinaryConfig;
            _mapper = mapper;
            _entityRepository = entityRepository;

            Account acc = new Account(
                _cloudinaryConfig.Value.CloudName,
                _cloudinaryConfig.Value.ApiKey,
                _cloudinaryConfig.Value.ApiSecret
            );

            _cloudinary = new Cloudinary(acc);
        }

        [HttpGet("{id}", Name = "GetJobCard")]
        public async Task<IActionResult> GetJobCard(int id)
        {
            var jobCard = await _entityRepository.GetJobCard(id);
            var jobCardDto = _mapper.Map<JobCardDto>(jobCard);
            return Ok(jobCardDto);
        }

        [HttpPost]
        public async Task<IActionResult> AddJobCardForUser(int machineId, [FromForm]JobCardDto jobCardDto)
        {
            var machine = await _entityRepository.GetMachine(machineId);

            var file = jobCardDto.File;

            var uploadResult = new ImageUploadResult();

            if(file.Length > 0)
            {
                using(var stream = file.OpenReadStream())
                {
                    var uploadParams = new ImageUploadParams()
                    {
                        File = new FileDescription(file.Name, stream)
                    };

                    uploadResult = _cloudinary.Upload(uploadParams);
                }
            }
            jobCardDto.Url = uploadResult.Uri.ToString();
            jobCardDto.PublicId = uploadResult.PublicId;

            var jobCard = _mapper.Map<JobCard>(jobCardDto);

            machine.JobCards.Add(jobCard);

            if(await _entityRepository.SaveAll())
            {
                var jobCardDtoReturn = _mapper.Map<JobCardDto>(jobCard); 
                return CreatedAtRoute("GetJobcard", new { id = jobCard.Id }, jobCardDtoReturn);
            }
            
            return BadRequest("Could not upload the jobcard");
        }
    }
}