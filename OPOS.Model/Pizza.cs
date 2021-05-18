using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json.Serialization;

namespace OPOS.Model
{
    public class Pizza
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }
        [JsonPropertyName("type")]
        public string PizzaType { get; set; }
        [JsonPropertyName("name")]
        public string PizzaName { get; set; }
        [JsonPropertyName("price")]
        public decimal Price { get; set; }
        [JsonPropertyName("image")]
        public string ImageName { get; set; }
        [JsonPropertyName("description")]
        public string Description { get; set; }
        [JsonPropertyName("ingredients")]
        public List<Ingredient> Ingredients { get; set; }
        [JsonPropertyName("toppings")]
        public List<Topping> Toppings { get; set; }

    }
}
