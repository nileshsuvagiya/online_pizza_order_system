import { Component, OnInit } from '@angular/core';
import { OrderPizza, OrderTopping } from 'src/app/model/orders';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  toppingPurchased: OrderTopping[] = [];
  pizzaPurchased: OrderPizza[];
  pizzaColumns: string[] = ["pName", "pQuantity", "pCost"];
  toppingColumns: string[] = ["tName", "tQuantity", "tCost"];
  totalCost: number;
  orderToggle : boolean ; 
  constructor(private servePizza: PizzaService) {}

  ngOnInit() {
    /* Get Topping orders from Pizza service Behaviour Subject */
    this.servePizza.toppingOrders.subscribe(
      defTop => (this.toppingPurchased = defTop)
    );

    /* Get Pizza orders from Pizza service Behaviour Subject */
    this.servePizza.pizzaOrders.subscribe(
      defPizza => (this.pizzaPurchased = defPizza)
    );

    let pizzaTotal = this.pizzaPurchased
      .map(pizza => pizza.pCost)
      .reduce((i, v) => i + v, 0);

    let toppingTotal = this.toppingPurchased
      .map(topping => topping.tCost)
      .reduce((i, v) => i + v, 0);

    this.totalCost = pizzaTotal + toppingTotal;
  }

  orderComplete()
  {
    if(this.toppingPurchased.length>0 && this.pizzaPurchased.length > 0)
    this.orderToggle = !this.orderToggle; 
  }

}
