using System;
using System.Collections.Generic;
using System.Globalization;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OMPhoenix.API.Data;
using OMPhoenix.API.Dtos;
using OMPhoenix.API.Helpers.Mail;
using OMPhoenix.API.Models;

namespace OMPhoenix.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class MachineController : ControllerBase
    {
        private readonly IEntityRepository _repo;
        private readonly IMapper _mapper;
        private readonly IEmailService _emailService;
        public MachineController(IEntityRepository repo, IMapper mapper, IEmailService emailService)
        {
            _emailService = emailService;
            _mapper = mapper;
            _repo = repo;

        }

        [HttpGet]
        public async Task<IActionResult> GetMachines()
        {
            var loggedInUserId = Convert.ToInt32(this.User.FindFirstValue(ClaimTypes.NameIdentifier));
            var machines = await _repo.GetMachines(loggedInUserId);
            return Ok(machines);
        }

        [HttpGet("{Id}")]
        public async Task<IActionResult> GetMachine(int Id)
        {
            var machine = await _repo.GetMachine(Id);
            return Ok(machine);
        }

        [HttpPost]
        public IActionResult AddMachine(MachineDto machineDto)
        {
            machineDto.UserId = Convert.ToInt32(this.User.FindFirstValue(ClaimTypes.NameIdentifier));
            var machine = _mapper.Map<Machine>(machineDto);
            if (machineDto.Id > 0)
            {
                _repo.Edit(machine);
                return Ok(machineDto);
            }
            else
            {
                _repo.Add<Machine>(machine);
                var newMachineDto = _mapper.Map<MachineDto>(machine);
                return Ok(newMachineDto);
            }
        }

        [HttpPost]
        [Route("request")]
        public IActionResult SendRequestMail(RequestDto requestDto)
        {
            var emailAddress = new EmailAddress(){
                Name = "OM Phoenix Traders",
                Address = "sales@omphoenixtraders.com"
            };
            var fromAddress = new EmailAddress(){
                Name = "OM Phoenix Traders",
                Address = "sales@omphoenixtraders.com"
            };
            var userName = CultureInfo.CurrentCulture.TextInfo.ToTitleCase(this.User.FindFirstValue(ClaimTypes.Name));
            var company = CultureInfo.CurrentCulture.TextInfo.ToTitleCase(this.User.FindFirstValue(ClaimTypes.GivenName));
            var template = $"Hello, Rajat\n\n {userName} from {company} has requested:- ";
            var emailMessage = new EmailMessage(){
                ToAddresses = new List<EmailAddress>(){emailAddress},
                FromAddresses = new List<EmailAddress>(){fromAddress},
                Subject = requestDto.RequestType,
                Content = template + (requestDto.RequestType == "ServiceRequest" ? requestDto.ServiceCategory : requestDto.PartNumber + " " + requestDto.MachineModel)
            };
            _emailService.Send(emailMessage);
            return Ok(200);
        }
        
    }
}