import {Component, OnInit} from '@angular/core';
import {Product} from '../shared/models/product';
import {ProductsService} from '../shared/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  topProductForHome: Product;
  data: string;
  isAuthenticated: boolean;
  constructor(private ps: ProductsService) {
  }

  ngOnInit(): void {
     // this.ps.getProduct(2).then(p => this.topProductForHome = p);
  }
}
