using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using OMPhoenix.API.Models;

namespace OMPhoenix.API.Data
{
    public class EntityRepository : IEntityRepository
    {
        private readonly DataContext _context;
        public EntityRepository(DataContext context)
        {
            _context = context;

        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<Machine> GetMachine(int Id)
        {
            var machine = await _context.Machines.Include(x => x.JobCards).FirstOrDefaultAsync(m => m.UserId == Id);
            return machine;
        }

        public async Task<IEnumerable<Machine>> GetMachines()
        {
            var machines = await _context.Machines.Include(x => x.JobCards).ToListAsync();
            return machines;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}