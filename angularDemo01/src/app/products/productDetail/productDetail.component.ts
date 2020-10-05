import {Component, Input, OnInit} from '@angular/core';
import {ProductsService} from '../../shared/services/products.service';
import {Product} from '../../shared/models/product';
import {ActivatedRoute, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './productDetail.component.html',
  styleUrls: ['./productDetail.component.scss']
})
export class ProductDetailComponent implements OnInit{
  product: Product;
  id: number;
  showNext(event): void{
    // navigate will return a promise
     this.router.navigate(['/product-detail', ++this.id])
       .catch();
  }
  // 要用service， 首先用constructor 来 inject service！
  constructor(
    private ps: ProductsService,
    private ar: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    // callback hell/ callback disaster!
    // 1. 解决callback hell
    // 2。 解决 next 点击太快的问题
       this.ar.paramMap // An Observable that contains a map of the required and optional parameters specific to the route
         .pipe(switchMap(params => {
           this.id = +params.get('id');
           return this.ps.getProduct(this.id);
         })).subscribe(p => this.product = p);

        /* this.ar.paramMap.subscribe(params => {
           this.id = +params.get('id');
           this.ps.getProduct(this.id).subscribe(p => this.product = p);
         }); */
      // this.id = + this.ar.snapshot.params.id; // 在app routing 里 定义了 id变量
    // this.ar.snapshot.params.id 注意这里是string， 而不是 number
    // +this.ar.snapshot.params.id  ==> use + to convert to positive number

       // this.product = this.ps.getProduct(this.id);
      //  this.ps.getProduct(this.id)
      // .then(product => this.product = product)
      // .catch();

       // this.ps.getProduct(this.id)
       //  .subscribe({
       //    next: p => this.product = p,
       //    error: err => console.log(err.message),
       //    complete:  () => console.log('get complete')
       //    });
  }
}
