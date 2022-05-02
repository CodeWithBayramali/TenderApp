using System;
using Microsoft.AspNetCore.Identity;

namespace server.Models
{
    public class User:IdentityUser
    {
        public string Name { get; set; }
        public string Password { get; set; }
    }
}