using Microsoft.EntityFrameworkCore;
using NorthwindAPI.Models;
using System.Collections.Generic; 
using System.Threading.Tasks;

namespace NorthwindAPI.Data
{
    public class NorthwindContext : DbContext
    {
        public NorthwindContext(DbContextOptions<NorthwindContext> options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
        
    }
}
