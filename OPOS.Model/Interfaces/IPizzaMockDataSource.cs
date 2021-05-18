using System;
using System.Collections.Generic;
using System.Text;

namespace OPOS.Model.Interfaces
{
    public interface IPizzaMockDataSource
    {
        List<Pizza> GetPizzasListMockData();
        List<Topping> GetToppingsListMockData();
        List<Ingredient> GetIngredientsListMockData();
    }
}
