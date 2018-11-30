using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OMPhoenix.API.Data;

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
            var machines = await _repo.GetMachines();
            return Ok(machines);
        }

        [HttpGet("{UserId}")]
        public async Task<IActionResult> GetMachine(int UserId)
        {
            var machine = await _repo.GetMachine(UserId);
            return Ok(machine);
        }
    }
}