using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json.Serialization;

namespace OPOS.Model
{
    public class Ingredient
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }
        [JsonPropertyName("iname")]
        public string IngrdientName { get; set; }
        
    }
}
