import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderPizzaComponent } from './order-pizza/order-pizza.component';
import { BuildUrPizzaComponent } from './build-ur-pizza/build-ur-pizza.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SharedModule } from '../shared/shared.module';
import { PizzaRoutingModule } from './pizza-routing.module';
import { AddToppingsComponent } from './add-toppings/add-toppings.component';
import { CreatePizzaComponent } from './build-ur-pizza/create-pizza/create-pizza.component';
import { ChoicesComponent } from './build-ur-pizza/choices/choices.component';



@NgModule({
  declarations: [
    OrderPizzaComponent,
    BuildUrPizzaComponent,
    ShoppingCartComponent,
    AddToppingsComponent,
    CreatePizzaComponent,
    ChoicesComponent
  ],
  imports: [
    PizzaRoutingModule,
    CommonModule,
    SharedModule
  ],
  entryComponents:[CreatePizzaComponent]
})
export class PizzaModule { }
