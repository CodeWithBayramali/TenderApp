using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Data
{
    public class TenderContext: IdentityDbContext<User>
    {

        public DbSet<Tender> Tenders { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<OfferTender> OfferTenders { get; set; }
        
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=tenderDB");
            base.OnConfiguring(optionsBuilder);
        }



        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<User>().HasKey(u=> u.Id);
            builder.Entity<IdentityRole>().HasKey(r=> r.Id);
        }
        
        
    }
}