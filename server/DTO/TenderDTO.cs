using System;

namespace server.DTO
{
    public class TenderDTO
    {
        public int tenderId { get; set; }
        public string uniqueTenderName { get; set; }
        public string tenderName { get; set; }
        public decimal startPrice { get; set; }
        public DateTime createdAt { get; set; }
        public DateTime endTime { get; set; }
        public string Category { get; set; }
        public string Description { get; set; }
    }
}