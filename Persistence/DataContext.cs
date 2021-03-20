using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        //Se crea tabla en la DB con el mismo nombre 'Activities'
        public DbSet<Activity> Activities { get; set; }
    }
}