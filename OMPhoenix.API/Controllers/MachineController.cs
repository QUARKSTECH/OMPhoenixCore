using System;
using System.Security.Claims;
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
    public class MachineController : ControllerBase
    {
        private readonly IEntityRepository _repo;
        private readonly IMapper _mapper;
        public MachineController(IEntityRepository repo, IMapper mapper)
        {
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
            if(machineDto.Id > 0 ) 
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
    }
}