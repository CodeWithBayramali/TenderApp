using System.Collections.Generic;
using System.Linq;
using server.Data.Abstract;
using server.Models;

namespace server.Data.Concrete
{
    public class EfCoreTender : EfCoreGeneric<Tender, TenderContext>, ITender
    {
        public void CreateOffer(OfferTender entity)
        {
            using (var context = new TenderContext())
            {
                context.Set<OfferTender>().Add(entity);
                context.SaveChanges();
            }
        }

        List<OfferTender> ITender.GetOffersById(int id)
        {
            using (var context = new TenderContext())
            {
                return context.Set<OfferTender>().Where(i => i.tenderId ==id).ToList();
            }
        }
    }
}