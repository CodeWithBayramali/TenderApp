using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace server.Data
{
    public static class MigrationManager
    {
        public static IHost MigrateDatabase(this IHost host)
        {
            using (var scope= host.Services.CreateScope())
            {
                using (var travelContext= scope.ServiceProvider.GetRequiredService<TenderContext>())
                {
                    try
                    {
                        travelContext.Database.Migrate();
                    }
                    catch (System.Exception)
                    {
                        
                        throw;
                    }
                }
            }
            return host;
        }
    }
}