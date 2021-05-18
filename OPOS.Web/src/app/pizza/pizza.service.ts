import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { OrderPizza, OrderTopping } from '../model/orders';
import { Pizzas } from '../model/pizzas';
import { Toppings } from '../model/toppings';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  
  /* Behaviour Subject to hold Pizza and Topping orders live throughout the website */
  toppingOrders = new BehaviorSubject<OrderTopping[]>([]);
  pizzaOrders = new BehaviorSubject<OrderPizza[]>([]);

  constructor(private http: HttpClient,@Inject('BASE_URL') public baseUrl: string) {}

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public getPizzasList(): Observable<Pizzas[]> {
    
    /* http to return response from a backend server */
    return this.http.get<Pizzas[]>(this.baseUrl + "getPizzas");
  }

  public getToppingsList(): Observable<Toppings[]> {
    return this.http
      .get<Toppings[]>(this.baseUrl + "getToppings");
  }

  /* update pizza and topping orders from component using next() method */
  public updateToppingOrders(toppingOrders: OrderTopping[]) {
    this.toppingOrders.next(toppingOrders);
  }

  public updatePizzaOrders(pizzaOrders: OrderPizza[]) {
    this.pizzaOrders.next(pizzaOrders);
  }

}


