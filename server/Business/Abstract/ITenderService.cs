using System.Collections.Generic;
using server.Models;

namespace server.Business.Abstract
{
    public interface ITenderService
    {
         Tender GetById (int id);

         List<Tender> GetAll();

         void Create(Tender entity);

         void Delete(Tender entity);

        List<OfferTender> GetOffersById(int id);

         void CreateOffer(OfferTender entity);


    }
}