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
            return Ok(allMachines);
        }

        [HttpPost]
        public IActionResult UpdateMachine(MachineDto machineDto)
        {
            var machine = _mapper.Map<Machine>(machineDto);
            _repo.Edit(machine);
            return Ok(machineDto);
        }
    }
}