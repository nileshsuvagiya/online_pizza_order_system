import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToppingsComponent } from './add-toppings/add-toppings.component';

import { BuildUrPizzaComponent } from './build-ur-pizza/build-ur-pizza.component';
import { OrderPizzaComponent } from './order-pizza/order-pizza.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: "orderPizza", component: OrderPizzaComponent },
  { path: "addToppings", component: AddToppingsComponent },
  { path: "buildPizza", component: BuildUrPizzaComponent },
  { path: "shoppingcart", component: ShoppingCartComponent },
  { path: "", redirectTo: "OrderPizzaComponent", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzaRoutingModule { }
