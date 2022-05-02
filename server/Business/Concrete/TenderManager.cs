using System.Collections.Generic;
using server.Business.Abstract;
using server.Data.Abstract;
using server.Models;

namespace server.Business.Concrete
{
    public class TenderManager : ITenderService
    {
        private ITender _iTender;

        public TenderManager(ITender iTender)
        {
            _iTender = iTender;
        }

        public void Create(Tender entity)
        {
            _iTender.Create(entity);
        }

        public void CreateOffer(OfferTender entity)
        {
            _iTender.CreateOffer(entity);
        }

        public void Delete(Tender entity)
        {
            _iTender.Delete(entity);
        }

        public List<Tender> GetAll()
        {
           return _iTender.GetAll();
        }

        public Tender GetById(int id)
        {
            return _iTender.GetById(id);
        }

        public List<OfferTender> GetOffersById(int id)
        {
            return _iTender.GetOffersById(id);
        }
    }
}