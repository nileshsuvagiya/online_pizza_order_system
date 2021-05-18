using OPOS.Model;
using OPOS.Model.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace OPOS.DataSource
{
    public class PizzaMockDataSource : IPizzaMockDataSource
    {
        public List<Pizza> GetPizzasListMockData()
        {
            return new List<Pizza>
            {
                new Pizza
                {
                    Id =1, PizzaName="paneer tikka",Description="This is popular italian pizza flavoured with marinated tikka sauce and paneer",PizzaType="veg",ImageName="paneer_tikka.jpg",Price=449, Ingredients = GetIngredientsListMockData(),Toppings=GetVegToppingsListMockData()
                },
                new Pizza
                {
                    Id =2, PizzaName="chiken italiaon",Description="This is popular italian pizza flavoured with light sugary taste and creamy touch",PizzaType="nonveg",ImageName="chiken_italiaon.jpg",Price=559, Ingredients = GetIngredientsListMockData(),Toppings=GetToppingsListMockData()
                },
                new Pizza
                {
                    Id =3, PizzaName="veggie supreme",Description="This is popular italian pizza flavoured with crushed garlic, with multiple herbs topped up with sweet corn",PizzaType="veg",ImageName="veggie_supreme.jpg",Price=330, Ingredients = GetIngredientsListMockData(),Toppings=GetVegToppingsListMockData()
                },
                new Pizza
                {
                    Id =4, PizzaName="Tripple chicken feast",Description="This is popular italian pizza flavoured with unique greek dressing topped up with keema and meat ball",PizzaType="nonveg",ImageName="Tripple_chicken_feast.jpg",Price=599, Ingredients = GetIngredientsListMockData(),Toppings=GetToppingsListMockData()
                },
                new Pizza
                {
                    Id =5, PizzaName="Ultimate chicken",Description="This is popular italian pizza flavoured with BBA sauce, flavored butter. it has spongy base which gives unique taste with multiple toppings",PizzaType="nonveg",ImageName="Ultimate_chicken.jpg",Price=680, Ingredients = GetIngredientsListMockData(),Toppings=GetToppingsListMockData()
                }
            };
        }

        public List<Topping> GetVegToppingsListMockData()
        {
            return new List<Topping>
            {
                new Topping
                {
                    Id =1,ToppingName="Sliced Pepperoni",ToppingImage="Sliced_Pepperoni",ToppingPrice=35
                },
                new Topping
                {
                    Id =10,ToppingName="Mushroom",ToppingImage="Mushroom",ToppingPrice=35
                },
                 new Topping
                {
                    Id =11,ToppingName="Black Olive",ToppingImage="Black_Olive",ToppingPrice=39
                },
                 new Topping
                {
                    Id =12,ToppingName="Green Olive",ToppingImage="Green_Olive",ToppingPrice=58
                },
                 new Topping
                {
                    Id =13,ToppingName="Cooked Italian Sausage",ToppingImage="Cooked_Italian_Sausage",ToppingPrice=67
                },
                  new Topping
                {
                    Id =14,ToppingName="Pineapple",ToppingImage = "Pineapple", ToppingPrice=35
                },
                 new Topping
                {
                    Id =15,ToppingName="Anchovy",ToppingImage = "Anchovy", ToppingPrice=39
                },
                 new Topping
                {
                    Id =16,ToppingName="Sesame Seeds",ToppingImage="Sesame_Seeds",ToppingPrice=58
                },
                 new Topping
                {
                    Id =17,ToppingName="Capsicum",ToppingImage = "Capsicum", ToppingPrice=67
                },
                 new Topping
                {
                    Id =18,ToppingName="Red peprika",ToppingImage = "Red_peprika", ToppingPrice=39
                },
                 new Topping
                {
                    Id =19,ToppingName="Paneer",ToppingImage = "Paneer", ToppingPrice=58
                },
                 new Topping
                {
                    Id =20,ToppingName="Fried Onion",ToppingImage = "Fried_Onion", ToppingPrice=67
                },
                  new Topping
                {
                    Id =13,ToppingName="Cheddar Cheese",ToppingImage = "Cheddar_Cheese", ToppingPrice=67
                },
                   new Topping
                {
                    Id =21,ToppingName="Mozzarella Cheese",ToppingImage = "Mozzarella_Cheese", ToppingPrice=67
                },
            };
        }
        public List<Topping> GetToppingsListMockData()
        {           
            return new List<Topping>
            {
                new Topping
                {
                    Id =1,ToppingName="Sliced Pepperoni",ToppingImage = "Sliced_Pepperoni.jpg", ToppingPrice=35
                },
                 new Topping
                {
                    Id =2,ToppingName="Pre-Cooked Bacon Pieces",ToppingImage="Pre-Cooked_Bacon_Pieces.jpg",ToppingPrice=39
                },
                 new Topping
                {
                    Id =3,ToppingName="Cooked Beef Topping",ToppingImage="Cooked_Beef_Topping.jpg",ToppingPrice=58
                },
                 new Topping
                {
                    Id =4,ToppingName="Cooked Italian Sausage",ToppingImage="Cooked_Italian_Sausage.jpg",ToppingPrice=67
                },
                  new Topping
                {
                    Id =5,ToppingName="Cooked Italian Style Meatballs",ToppingImage="Cooked_Italian_Style_Meatballs.jpg",ToppingPrice=35
                },
                 new Topping
                {
                    Id =6,ToppingName="Sliced Hard Salami",ToppingImage="Sliced_Hard_Salami.jpg",ToppingPrice=39
                },
                 new Topping
                {
                    Id =7,ToppingName="Ham",ToppingImage="Ham.jpg",ToppingPrice=58
                },
                 new Topping
                {
                    Id =8,ToppingName="Steak",ToppingImage="Steak.jpg",ToppingPrice=67
                },
                 new Topping
                {
                    Id =11,ToppingName="Black Olive",ToppingImage="Black_Olive.jpg",ToppingPrice=39
                },
                 new Topping
                {
                    Id =12,ToppingName="Green Olive",ToppingImage = "Green_Olive.jpg", ToppingPrice=58
                },
                 new Topping
                {
                    Id =13,ToppingName="Cheddar Cheese" ,ToppingImage = "Cheddar_Cheese.jpg", ToppingPrice=67
                },
                  new Topping
                {
                    Id =14,ToppingName="Pineapple" ,ToppingImage = "Pineapple.jpg", ToppingPrice=35
                },
                 new Topping
                {
                    Id =15,ToppingName="anchovy" ,ToppingImage = "anchovy.svg", ToppingPrice=39
                },
                 new Topping
                {
                    Id =16,ToppingName="Sesame Seeds" ,ToppingImage = "Sesame_Seeds.jpg", ToppingPrice=58
                },
                 new Topping
                {
                    Id =17,ToppingName="Capsicum" ,ToppingImage = "Capsicum.jpg", ToppingPrice=67
                },
                 new Topping
                {
                    Id =18,ToppingName="Red peprika" ,ToppingImage = "Red_peprika.jpg", ToppingPrice=39
                },
                 new Topping
                {
                    Id =19,ToppingName="Paneer" ,ToppingImage = "Paneer.jpg", ToppingPrice=58
                },
                 new Topping
                {
                    Id =20,ToppingName="Fried Onion" ,ToppingImage = "Fried_Onion.jpg", ToppingPrice=67
                },
                  new Topping
                {
                    Id =21,ToppingName="Mozzarella Cheese" ,ToppingImage="Mozzarella_Cheese.jpg",ToppingPrice=67
                },
                 new Topping
                {
                    Id =22,ToppingName="mozzarella" ,ToppingImage = "mozzarella.svg", ToppingPrice=67
                },
                  new Topping
                {
                    Id =23,ToppingName="mushroom" ,ToppingImage = "mushroom.svg", ToppingPrice=35
                },
                 new Topping
                {
                    Id =24,ToppingName="olive" ,ToppingImage = "olive.svg", ToppingPrice=39
                },
                 new Topping
                {
                    Id =25,ToppingName="onion" ,ToppingImage = "onion.svg", ToppingPrice=58
                },
                 new Topping
                {
                    Id =26,ToppingName="pepper" ,ToppingImage = "pepper.svg", ToppingPrice=67
                },
                 new Topping
                {
                    Id =27,ToppingName="pepperoni" ,ToppingImage = "pepperoni.svg", ToppingPrice=39
                },
                 new Topping
                {
                    Id =28,ToppingName="prawn" ,ToppingImage = "prawn.svg", ToppingPrice=58
                },
                 new Topping
                {
                    Id =29,ToppingName="sweetcorn" ,ToppingImage = "sweetcorn.svg", ToppingPrice=67
                },
                  new Topping
                {
                    Id =30,ToppingName="tomato" ,ToppingImage="tomato.svg",ToppingPrice=67
                },
                    new Topping
                {
                    Id =31,ToppingName="basil",ToppingImage="basil.svg",ToppingPrice=39
                },
                 new Topping
                {
                    Id =32,ToppingName="chili",ToppingImage = "chili.svg", ToppingPrice=58
                },
                    new Topping
                {
                    Id =33,ToppingName="bacon",ToppingImage="bacon.svg",ToppingPrice=39
                }
            };
        }
        public List<Ingredient> GetIngredientsListMockData()
        {
            return new List<Ingredient>
            {
                new Ingredient
                {
                    Id =1, IngrdientName = "Dough/Flour"
                },
                 new Ingredient
                {
                    Id =2, IngrdientName = "Pizza Dough Mix"
                },
                  new Ingredient
                {
                    Id =3, IngrdientName = "Deep Dish Pizza Dough Mix"
                },
                   new Ingredient
                {
                    Id =4, IngrdientName = "Ultra Thin/Low Carb Pizza Dough"
                },
                    new Ingredient
                {
                    Id =5, IngrdientName = "Gluten Free Pizza Crust"
                },
                 new Ingredient
                {
                    Id =6, IngrdientName = "Pizza Sauce"
                },
                  new Ingredient
                {
                    Id =7, IngrdientName = "Pizza Sauce Seasoning"
                },
                   new Ingredient
                {
                    Id =8, IngrdientName = "cheese"
                }
            };
        }
    }

    
}
