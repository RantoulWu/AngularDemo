/* how to create a pipe in angular？ */
import {Pipe, PipeTransform} from '@angular/core';
import {Product} from '../models/product';

@Pipe({
  name: 'priceRange', // 必须加 name
  // pure: true
  /*
  * pure changes: pure changes means primitive value change or reference change
  * impure changes: other changes than pure changes
  * for example, array element change or object property change
  * pure pipe: a pipe can detect only pure changes
  * impure pipe: a pipe can detect both pure and impure changes
  * */
   // what is pure false meta-data?
})
// 必须 实现 pipetransform 接口， 实现它的 trnasform方法
export class PriceRangePipe implements PipeTransform{
  // 对 products 进行操作， 两个参数 min: number, max: number
  // 最后返回Product[]
  transform(products: Product[], min: number, max: number): Product[] {
    min = min || Number.MIN_VALUE;
    max = max || Number.MAX_SAFE_INTEGER;
    return products.filter(p => p.price >= min && p.price <= max);
  }
}
