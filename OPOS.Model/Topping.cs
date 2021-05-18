using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json.Serialization;

namespace OPOS.Model
{
    public class Topping
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }
        [JsonPropertyName("tname")]
        public string ToppingName { get; set; }
        [JsonPropertyName("timage")]
        public string ToppingImage { get; set; }
        [JsonPropertyName("price")]
        public decimal ToppingPrice { get; set; }
    }
}
