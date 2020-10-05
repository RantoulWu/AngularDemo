import {Pipe, PipeTransform} from '@angular/core';
import {Product} from '../models/product';

@Pipe({
  name: 'currencyExchange',
})
/*export class CurrencyExchangePipe implements PipeTransform{
  transform(products: Product[], curCurrency: string): Product[]{
    const copyArray = JSON.parse(JSON.stringify(products)); // make a deep copy of array
    return copyArray.map((p) => {
        if (curCurrency === 'CNY') {
          p.price = p.price * 6.9;
        }
        else if (curCurrency === 'JPY') {
          p.price = p.price * 105.9;
        }
        return p;
    });
  }
}*/
export class CurrencyExchangePipe implements PipeTransform {
  Rates = {
    USD : 1,
    JPY : 106,
    CNY : 7
  };
  transform(price: number, currencyCode: string): number {
    return price * this.Rates[currencyCode];
  }
}
