using System.Collections.Generic;
using System.Threading.Tasks;
using OMPhoenix.API.Models;

namespace OMPhoenix.API.Data
{
    public interface IEntityRepository
    {
         void Add<T>(T entity) where T: class;
         void Delete<T>(T entity) where T: class;
         void Edit<T>(T entity) where T: class;
         Task<bool> SaveAll();
         Task<IEnumerable<Machine>> GetMachines(int loggedInUserId);
         Task<Machine> GetMachine(int Id);
         Task<IEnumerable<Machine>> GetAllMachines();
         Task<IEnumerable<User>> GetAllUsers();
         Task<JobCard> GetJobCard(int Id);
    }
}