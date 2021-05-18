using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using OPOS.Model.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OPOS.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PizzaController : ControllerBase
    {
        private readonly IPizzaDataService _pizzaDataService;
        private readonly ILogger<PizzaController> _logger;
        public PizzaController(IPizzaDataService pizzaDataService, ILogger<PizzaController> logger)
        {
            _pizzaDataService = pizzaDataService;
            _logger = logger;
        }

        [HttpGet]
        [Route("getPizzas")]
        public object GetPizzasList()
        {
            return this._pizzaDataService.GetPizzasList();
        }

        [HttpGet]
        [Route("getToppings")]
        public object GetToppingsList()
        {
            return this._pizzaDataService.GetToppingsList();
        }

        [HttpGet]
        [Route("getIngrediants")]
        public object GetIngrediantsList()
        {
            return this._pizzaDataService.GetIngredientsList();
        }
    }
}
