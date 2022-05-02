using System.ComponentModel.DataAnnotations;

namespace server.Models
{
    public class OfferTender
    {
        [Key]
        public int OfferId { get; set; }

        public int tenderId { get; set; }
        public Tender Tenders { get; set; }

        public string Id { get; set; }
        public User Users { get; set; }

        public string UserName { get; set; }

        public decimal Offer { get; set; }
    }
}