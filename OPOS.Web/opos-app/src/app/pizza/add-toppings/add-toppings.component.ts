import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { OrderTopping } from 'src/app/model/orders';
import { Toppings } from 'src/app/model/toppings';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-add-toppings',
  templateUrl: './add-toppings.component.html',
  styleUrls: ['./add-toppings.component.css']
})
export class AddToppingsComponent implements OnInit , OnDestroy{

  toppingsList: Toppings[] = [];
  selection = new SelectionModel<Toppings>(true, []);
  selectedToppingList = {};
  toppingPurchasedCart: OrderTopping[] = [];

  _unsubscriber = new Subject();
  constructor(private servePizza: PizzaService) {
    this.servePizza.getToppingsList().subscribe(data => {
      this.toppingsList = data;
    });
  }
  ngOnInit() {
    this.servePizza.toppingOrders.subscribe(
      defTop => (this.toppingPurchasedCart = defTop)
    );
  }

  ngOnDestroy() {
    
  }
  displayedColumns = ["timage", "name", "price", "add"];

  /** Gets the total cost of all Toppings. */
  getTotalCost() {
    return this.toppingsList
      .filter(topping =>
        Object.keys(this.selectedToppingList).includes(topping.id.toString())
      )
      .map(t => t.price * this.selectedToppingList[t.id])
      .reduce((acc, value) => acc + value, 0);
  }

  /* Button logic to decrement Quantity of Topping */
  decrementer(toppingId) {
    let count = 0;
    if (this.selectedToppingList[toppingId] > 0) {
      this.selectedToppingList[toppingId]
        ? --this.selectedToppingList[toppingId]
        : (this.selectedToppingList[toppingId] = --count);
    }
  }

  /* Button logic to increment Quantity of Topping */
  incrementer(toppingId) {
    let count = 0;
    this.selectedToppingList[toppingId]
      ? ++this.selectedToppingList[toppingId]
      : (this.selectedToppingList[toppingId] = ++count);
  }

  /* Checking out Pizzas selected to Cart.
   * 1.) create a object of type OrderTopping by iterating selected items & Topping List
   * 2.) push each object to final array of Objects(json) to pass it to cart component
   * 3.) update existing by checking index of toppings selected is already there in final json
   *     ( if user navigates back from cart to order topping again ) or create New one
   * 4.) pass final purchased toppings JSON to service using BehaviourSubject reference
   */

  checkoutTopping() {
    for (let id of Object.keys(this.selectedToppingList)) {
      let toppingEntry = {
        tId: parseInt(id),
        tName: this.toppingsList
          .filter(topping => {
            if (topping.id === parseInt(id)) {
              return topping.tname;
            }
          })
          .map(topName => topName.tname)
          .toString(),
        tQuantity: parseInt(this.selectedToppingList[id]),
        tCost: this.toppingsList
          .filter(t => {
            if (t.id === parseInt(id)) {
              return t.price;
            }
          })
          .map(t => t.price * parseInt(this.selectedToppingList[id]))
          .pop()
      };

      let index = this.toppingPurchasedCart.findIndex(
        t => t.tId === toppingEntry.tId
      );

      index === -1
        ? this.toppingPurchasedCart.push(toppingEntry)
        : (this.toppingPurchasedCart[index] = toppingEntry);
    }
    this.servePizza.updateToppingOrders(this.toppingPurchasedCart);
  }


}
