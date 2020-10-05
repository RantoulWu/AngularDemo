import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../shared/services/products.service';
import {Product} from '../shared/models/product';
import {CurrencyExchangePipe} from '../shared/pipes/currency-exchange-pipe';
import {CurrencyService} from '../shared/services/currency.service';
// how to create component in angular?
// 1.use @Component and provide metadata
// 2. create a class and implement its business logic and export class
// 3. declare component in the module it belongs to
@Component({
  // meta data  what is meta data?
  selector: 'app-product',
  templateUrl: './products.component.html',
  // optional
  styleUrls: ['./products.component.scss']
})
// tslint:disable-next-line:class-name
export class ProductsComponent implements OnInit {
  products: Product[];
  minRange: number;
  maxRange: number;
  inputName: string;

  /*productService;
  constructor(ps: ProductsService) {
    // angular actually also support pure JS without any TS, but not recommended
    this.productService = ps;
  }*/
  // written the access modifier before parameter name
  // constructor will automatically create a variable in class
  updateName(event): void{
    this.inputName = event.target.value;
  }
  updateMin(event): void {
    this.minRange = event.target.value;
  }
  updateMax(event): void {
    this.maxRange = event.target.value;
  }
  addProduct(): void {
    // this.ps.addProductNo6();
    const newP = {
      id: 7,
      name: 'iPhone5C',
      brand: 'Apple',
      price: 9999,
      stock: 222,
      image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone5c.png'
    };
    // this.products.push(newP);
    // console.log(this.products);
    // how to make copy of array in ES6 ? ...this.products
    this.products = [...this.products, newP];
  }
  constructor(

    private ps: ProductsService,
    public cs: CurrencyService,
  ) {
    // constructor in angular component is mainly
    // used to do dependency injection
    // cannot do initialization in this constructor!
  }

// life cycle hook
  ngOnInit(): void {
   // this.ps.getProducts()
   //   .then(products => this.products = products)
   //   .catch();
   this.ps.getProducts()
     .subscribe(products => this.products = products);
  }

}
