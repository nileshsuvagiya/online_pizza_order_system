using System;
using System.Collections.Generic;
using System.Text;

namespace OPOS.Model.Interfaces
{
    public interface IPizzaDataService
    {
        List<Pizza> GetPizzasList();

        List<Topping> GetToppingsList();

        List<Ingredient> GetIngredientsList();

    }
}
