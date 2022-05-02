using System.Collections.Generic;

namespace server.Data.Abstract
{
    public interface IRepository<T>
    {
         T GetById (int id);

         List<T> GetAll();

         void Create(T entity);

         void Delete(T entity);
         
    }
}