using System.ComponentModel.DataAnnotations;

namespace server.DTO
{
    public class UserForLoginDTO
    {
        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }
    }
}