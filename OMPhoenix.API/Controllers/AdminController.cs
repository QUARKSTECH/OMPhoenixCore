using System.Collections.Generic;
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
    public class AdminController : ControllerBase
    {
        private readonly IEntityRepository _repo;
        private readonly IMapper _mapper;
        public AdminController(IEntityRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllMachines()
        {
            var allMachines = await _repo.GetAllMachines();
            var machinesDto = _mapper.Map<IEnumerable<MachineDto>>(allMachines);
            return Ok(machinesDto);
        }

        [HttpPost]
        public IActionResult UpdateMachine(MachineDto machineDto)
        {
            var machine = _mapper.Map<Machine>(machineDto);
            _repo.Edit(machine);
            return Ok(machineDto);
        }

        [Route("getusers")]
        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {
            var allUsers = await _repo.GetAllUsers();
            var userDto = _mapper.Map<IEnumerable<UserDto>>(allUsers);
            return Ok(userDto);
        }

        [Route("updateusers")]
        [HttpPost]
        public IActionResult UpdateUsers(UserDto userDto)
        {
            var user = _mapper.Map<User>(userDto);
            _repo.Edit(user);
            return Ok(userDto);
        }        
    }
}