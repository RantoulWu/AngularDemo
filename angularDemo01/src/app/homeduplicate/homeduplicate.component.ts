import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ProductsService} from '../shared/services/products.service';
import {Product} from '../shared/models/product';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-homeduplicate',
  templateUrl: './homeduplicate.component.html',
  styleUrls: ['./homeduplicate.component.scss'],
  // no encapsulation
  // encapsulation: ViewEncapsulation.None
  // default
  // encapsulation: ViewEncapsulation.None
  // encapsulation: ViewEncapsulation.Emulated
})
export class HomeduplicateComponent implements OnInit, OnDestroy {
  data: string;
  isAuthenticated: boolean;
  checkBox: boolean;
  topProductForHome: Product;
  myIntervalSubscription: Subscription;
  constructor(private ps: ProductsService) { }

  ngOnInit(): void {
    // this.ps.getProduct(2).then(p => this.topProductForHome = p);
    this.ps.getProduct(2)
      .subscribe(
        p => this.topProductForHome = p,
        error => console.log(error),
        () => console.log('completed') // will we see complete here? Yes !
      );
    //
    // interval(1000)
    //   .subscribe(num => console.log(num)); // how to unsubscribe this?
    // 1. use this.myIntervalSubscription or 2. use ngOnDestroy()
    this.myIntervalSubscription = interval(1000)
      .subscribe(num => console.log(num)); // how to unsubscribe this?
    setTimeout(() => this.myIntervalSubscription.unsubscribe(), 5000);
  }
  ngOnDestroy(): void { // do clean up work, like unsubscribe observable
    // for class and class variables and class functions, angular will clean them up
    this.myIntervalSubscription.unsubscribe();
  }

}
