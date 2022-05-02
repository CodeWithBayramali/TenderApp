using server.Models;
using server.Data.Abstract;
using System.Collections.Generic;

namespace server.Data.Abstract
{
    public interface ITender:IRepository<Tender>
    {
         List<OfferTender> GetOffersById(int id);

         void CreateOffer(OfferTender entity);

    }
}