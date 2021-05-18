import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-build-ur-pizza',
  templateUrl: './build-ur-pizza.component.html',
  styleUrls: ['./build-ur-pizza.component.css']
})
export class BuildUrPizzaComponent implements OnInit , OnDestroy{

 
  _unsubscriber = new Subject();
  constructor(private servePizza: PizzaService) {
    
  }
  ngOnInit() {
    
  }

  ngOnDestroy() {
    
  }
}
