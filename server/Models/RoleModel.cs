using System.ComponentModel.DataAnnotations;

namespace server.Models
{
    public class RoleModel
    {
        [Required]
        public string Name { get; set; }
    }
}