import {Component, Input} from '@angular/core';
import {Product} from '../../shared/models/product';
import {CurrencyService} from '../../shared/services/currency.service';

@Component({
  selector: 'app-product-overview',
  templateUrl: './productOverview.product.html'
  // optional
  // styleUrls: ['./productOverview.product.scss']
})
export class ProductOverviewComponent {
  /*
  *  parent -> child component,
  *  in child component, use @Input decorator to decorate a component instance
  *  to receive data pass from parent
  * */
  @Input()
  product: Product;
  constructor(
    public cs: CurrencyService
  ) {
  }
}
