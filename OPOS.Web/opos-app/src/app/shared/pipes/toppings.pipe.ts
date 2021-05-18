import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toppings'
})
export class ToppingsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
