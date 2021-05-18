import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-pizza',
  templateUrl: './create-pizza.component.html',
  styleUrls: ['./create-pizza.component.css']
})
export class CreatePizzaComponent implements OnInit {

  toppings: string[];

  constructor() { }

  ngOnInit() {
    console.log(this.toppings);
  }

  getMyStyles(i) {
    console.log(this.translate(i));
    const myStyles = {
       'transform':  this.translate(i),
    };
    return myStyles;
}


  translate (i) {
    const x =  -30 + Math.round((50 * Math.cos(i * (2 * Math.PI / 15)))) + 'px';
    const y =   20 + Math.round((26 * Math.sin(i * (2 * Math.PI / 15)))) + 'px';
      const val = `translate(${x}, ${y})`;
      return val;
  }

}
