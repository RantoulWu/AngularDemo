import {Pipe, PipeTransform} from '@angular/core';
import {Product} from '../models/product';

@Pipe({
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform{
  transform(products: Product[], name: string): Product[]{
    return name === undefined ? products : products
      .filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
  }
}
