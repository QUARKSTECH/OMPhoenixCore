using System;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OMPhoenix.API.Data;
using OMPhoenix.API.Dtos;
using OMPhoenix.API.Models;

namespace OMPhoenix.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class EnquiryController : ControllerBase
    {
        private readonly IEntityRepository _repo;
        private readonly IMapper _mapper;
        public EnquiryController(IEntityRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult AddEnquiry(EnquiryDto enquiryDto)
        {
            try
            {
                var enquiry = _mapper.Map<Enquiry>(enquiryDto);
                if (enquiryDto.Id > 0)
                {
                    _repo.Edit(enquiry);
                    return Ok(enquiryDto);
                }
                else
                {
                    _repo.Add<Enquiry>(enquiry);
                    return StatusCode(201);
                }
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message.ToString());
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetEnquiries()
        {
            var enquiries = await _repo.GetAllEnquiries();
            return Ok(enquiries);
        }
    }
}