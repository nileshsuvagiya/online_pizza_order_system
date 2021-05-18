import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { OrderPizza } from 'src/app/model/orders';
import { Pizzas } from 'src/app/model/pizzas';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-order-pizza',
  templateUrl: './order-pizza.component.html',
  styleUrls: ['./order-pizza.component.css']
})
export class OrderPizzaComponent implements OnInit {

  cartButtonToggle: boolean = true;
  pizzasList: Pizzas[] = [];
  selectedPizzaId: number;
  selectedPizzaList = {};
  pizzaPurchasedCart: OrderPizza[] = [];
  totalPrice: number = 0;

  _unsubscriber = new Subject();
  constructor(public pizzaService: PizzaService) {
   
  }

  ngOnInit() {
    this.pizzaService.getPizzasList().subscribe(data => {
      this.pizzasList = data;
    });
  }

  /* To toggle Add to cart and add buttons */
  cartToggler(pizzaId) {
    this.cartButtonToggle = !this.cartButtonToggle;
    this.selectedPizzaId = pizzaId;
    this.cartButtonToggle = true; // Reset toggler for every Pizza button
  }

  /* Decrement pizza button and Total Price calculation*/
  decrementor(pizzaId) {
    let count = 0;
    let price = this.pizzasList
      .filter(p => p.id === pizzaId)
      .map(pizza => pizza.price)
      .pop();

    if (this.selectedPizzaList[pizzaId]) {
      if (this.selectedPizzaList[pizzaId] > 0) {
        --this.selectedPizzaList[pizzaId];
        this.totalPrice = this.totalPrice - price;
      } else {
        this.selectedPizzaList[pizzaId] = --count;
        this.totalPrice = this.totalPrice - price;
      }
    }
  }

  /* Increment pizza button and Total Price calculation */
  incrementor(pizzaId) {
    let count = 0;
    let price = this.pizzasList
      .filter(p => p.id === pizzaId)
      .map(pizza => pizza.price)
      .pop();

    if (this.selectedPizzaList[pizzaId]) {
      ++this.selectedPizzaList[pizzaId];
      this.totalPrice = this.totalPrice + price;
    } else {
      this.selectedPizzaList[pizzaId] = ++count;
      this.totalPrice = this.totalPrice + price;
    }
  }

  /* Checking out Pizzas selected to Cart.
   * 1.) create a object of type OrderPizza by iterating selected items & pizza List
   * 2.) push each object to final array of Objects(json) to pass it to cart component
   * 3.) update existing by checking index of pizzas selected is already there in final json
   *     ( if user navigates back from cart to order pizza again ) or create New one
   * 4.) pass final purchased pizzas JSON to service using BehaviourSubject reference
   */
  checkoutPizza() {
    for (let id of Object.keys(this.selectedPizzaList)) {
      let pizzaEntry: OrderPizza = {
        pId: parseInt(id),
        pName: this.pizzasList
          .filter(pizza => {
            if (pizza.id === parseInt(id)) return pizza.name;
          })
          .map(pizzaName => pizzaName.name)
          .toString(),
        pQuantity: parseInt(this.selectedPizzaList[id]),
        pCost: this.pizzasList
          .filter(pizza => (pizza.id === parseInt(id) ? pizza.price : 0))
          .map(p => p.price * parseInt(this.selectedPizzaList[id]))
          .pop()
      };
      let index = this.pizzaPurchasedCart.findIndex(
        p => p.pId === pizzaEntry.pId
      );

      index === -1
        ? this.pizzaPurchasedCart.push(pizzaEntry)
        : (this.pizzaPurchasedCart[index] = pizzaEntry);
    }
    this.pizzaService.updatePizzaOrders(this.pizzaPurchasedCart);
  }

}
