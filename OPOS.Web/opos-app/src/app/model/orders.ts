export interface Orders {
    oId: number;
    cId: number;
    cName: string;
    caddress: string;
    pizzas: OrderPizza[];
    toppings: OrderTopping[];
  }
  
  export interface OrderPizza {
    pId: number;
    pName: string;
    pQuantity: number;
    pCost: number;
  }
  
  export interface OrderTopping {
    tId: number;
    tName: string;
    tQuantity: number;
    tCost: number;
  }
  