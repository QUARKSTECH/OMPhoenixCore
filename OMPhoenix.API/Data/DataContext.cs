using OMPhoenix.API.Models;
using Microsoft.EntityFrameworkCore;

namespace OMPhoenix.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Machine> Machines { get; set; }
        public DbSet<JobCard> JobCards { get; set; }
    }
}