using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using server.Business.Abstract;
using server.Data;
using server.DTO;
using server.Models;

namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TenderController : ControllerBase
    {
        
        private readonly TenderContext _context;
        private readonly ITenderService _tenderService;

        public TenderController(TenderContext context, ITenderService tenderService)
        {
            _context =context;
            _tenderService = tenderService;
        }

        [HttpGet]
        public IActionResult GetTenders()
        {
            var tenders = _tenderService.GetAll().ToList();

            return Ok(tenders);
        }

        [HttpGet("offer/{id}")]
        public IActionResult Offer(int id)
        {
            var offers = _tenderService.GetOffersById(id);
            return Ok(offers);
        }


        [HttpPost("offer")]
        public IActionResult Offer(OfferTender entity)
        {

            if(entity != null)
            {
                _tenderService.CreateOffer(entity);
                return Ok(new {message= "Başarıyla teklif verildi"});
            }

            return BadRequest();
        }

        
    }
}
