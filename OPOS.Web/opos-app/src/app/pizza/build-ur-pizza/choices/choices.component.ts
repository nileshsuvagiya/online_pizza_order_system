import { SelectionModel } from '@angular/cdk/collections';
import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { OrderPizza, OrderTopping } from 'src/app/model/orders';
import { Pizzas } from 'src/app/model/pizzas';
import { Toppings } from 'src/app/model/toppings';
import { PizzaService } from '../../pizza.service';
import { CreatePizzaComponent } from '../create-pizza/create-pizza.component';

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.css']
})
export class ChoicesComponent implements OnInit {

  @ViewChild('pizza', {read: ViewContainerRef}) pizza: ViewContainerRef;

  isBaseOfPizzaReady:boolean=false;

  selectedToppings: string[];
  toppings: string[];
  toppingsList: Toppings[] = [];
  toppingsFiltered: Toppings[] = [];

  cartButtonToggle: boolean = true;
  pizzasList: Pizzas[] = [];
  selectedPizzaId: number;
  selectedPizzaList = {};
  pizzaPurchasedCart: OrderPizza[] = [];
  totalPrice: number = 0;

  selection = new SelectionModel<Toppings>(true, []);
  selectedToppingList = {};
  toppingPurchasedCart: OrderTopping[] = [];

  constructor(private resolver: ComponentFactoryResolver,public pizzaService: PizzaService) {
    this.selectedToppings = [];
    this.toppings = ['anchovy', 'bacon', 'basil', 'chili', 'mozzarella',
                  'mushroom', 'olive', 'onion', 'pepper', 'pepperoni',
                  'prawn', 'sweetcorn', 'tomato'];
    this.isBaseOfPizzaReady=false;
   }
   ngOnInit(){
    this.pizzaService.getToppingsList().subscribe(data => {
      this.toppingsList = data;
      this.toppingsFiltered = this.getFilteredListOfToppings(); 

    });
   }

   getFilteredListOfToppings(){
    const filtered = this.toppingsList.filter(el => {
      return this.toppings.indexOf(el.tname.toLocaleLowerCase()) !== -1;
   });
   return filtered;
   }

   selectToppings(topping) {
     console.log(topping);
     if (this.selectedToppings.indexOf(topping.tname) === -1) {
       this.selectedToppings.push(topping.tname);
       this.incrementer(topping.id);
     }
     else {
       this.selectedToppings.splice(this.selectedToppings.indexOf(topping.tname), 1);
       this.decrementer(topping.id);
      }
   }
   incrementer(toppingId) {
    let count = 0;
    this.selectedToppingList[toppingId]
      ? ++this.selectedToppingList[toppingId]
      : (this.selectedToppingList[toppingId] = ++count);
  }
  decrementer(toppingId) {
    let count = 0;
    if (this.selectedToppingList[toppingId] > 0) {
      this.selectedToppingList[toppingId]
        ? --this.selectedToppingList[toppingId]
        : (this.selectedToppingList[toppingId] = --count);
    }
  }
   createPizza() {
     this.isBaseOfPizzaReady = true;
    const pizzaFactory = this.resolver.resolveComponentFactory(CreatePizzaComponent);
    const pizza = this.pizza.createComponent(pizzaFactory);
    this.selectedToppings = [];
    pizza.instance.toppings = this.selectedToppings;
   }

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
    this.pizzaService.updateToppingOrders(this.toppingPurchasedCart);
  }
   checkoutPizza() {
    this.checkoutTopping();
    let pizzaEntry: OrderPizza = {
      pId: 0,
      pName: 'MyOwnPizza',
      pQuantity: 1,
      pCost: 555
    };
    let index = this.pizzaPurchasedCart.findIndex(
      p => p.pId === pizzaEntry.pId
    );

    index === -1
      ? this.pizzaPurchasedCart.push(pizzaEntry)
      : (this.pizzaPurchasedCart[index] = pizzaEntry);
    this.pizzaService.updatePizzaOrders(this.pizzaPurchasedCart);
  }


}
