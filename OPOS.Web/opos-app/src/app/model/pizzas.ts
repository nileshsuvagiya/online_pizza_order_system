export interface Pizzas {
    id: number;
    type: string;
    price: number;
    name: string;
    image: string;
    description: string;
    ingredients: Ingredient[];
    toppings: Topping[];
  }
  
  interface Topping {
    id: number;
    tname: string;
    timage:string;
    price: number;
  }
  
  interface Ingredient {
    id: number;
    iname: string;
  }
  