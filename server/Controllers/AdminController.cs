using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using server.Business.Abstract;
using server.Data;
using server.DTO;
using server.Models;

namespace server.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class AdminController : ControllerBase
    {
        private RoleManager<IdentityRole> _roleManager;
        private UserManager<User> _userManager;
        private TenderContext _context;
        private readonly ITenderService _tenderService;

        public AdminController(RoleManager<IdentityRole> roleManager, UserManager<User> userManager, ITenderService tenderService,TenderContext context)
        {
            _roleManager = roleManager;
            _userManager = userManager;
            _tenderService = tenderService;
            _context = context;
        }

        [HttpPost("create/{id}")]
        public IActionResult CreateTender(TenderDTO model,string id)
        {

            var role = _context.UserRoles.Where(i => i.UserId == id);

            if (role != null)
            {
                var tender = new Tender
                {
                    uniqueTenderName = Guid.NewGuid().ToString(),
                    tenderName = model.tenderName,
                    startPrice = model.startPrice,
                    Description = model.Description,
                    Category = model.Category,
                    createdAt = DateTime.Now,
                    endTime = DateTime.Now
                };

                if (tender != null)
                {
                    _tenderService.Create(tender);
                    return Ok();
                }


            }

            return BadRequest();
        }


        [HttpDelete("delete/{id}/{adminId}")]
        public IActionResult DeleteTender(int id,string adminId)
        {
            var role = _context.UserRoles.Where(i=> i.UserId == adminId);
           var tender= _tenderService.GetById(id);

           if (tender != null && role != null)
           {
               _tenderService.Delete(tender);
           }
           return NoContent();
        }

    }
}