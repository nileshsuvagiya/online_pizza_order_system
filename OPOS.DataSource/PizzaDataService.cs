using OPOS.Model;
using OPOS.Model.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace OPOS.DataSource
{
    public class PizzaDataService : IPizzaDataService
    {
        public readonly IPizzaMockDataSource _pizzaMockDataSource;
        public PizzaDataService(IPizzaMockDataSource pizzaMockDataSource)
        {
            _pizzaMockDataSource = pizzaMockDataSource;
        }

        public List<Ingredient> GetIngredientsList()
        {
            return this._pizzaMockDataSource.GetIngredientsListMockData();
        }

        public List<Pizza> GetPizzasList()
        {
            return this._pizzaMockDataSource.GetPizzasListMockData();
        }

        public List<Topping> GetToppingsList()
        {
            return this._pizzaMockDataSource.GetToppingsListMockData();
        }
    }
}
