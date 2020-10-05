import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import env from '../../../environments/environment';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

// 1. use @Injectable decorator
// 2. add into provider[] in module.js
// before angular 6
@Injectable()
export class ProductsService{
  products;
  // before angular 4.3 called HttpClientService is called Http service
  constructor(private httpClient: HttpClient) {
  }
  getProduct(id: number): Observable<Product>{
    // environment.API_UR L= 'http://localhost:8080',
    return this.httpClient.get<Product>(`${environment.API_URL}/products/${id}`);
  }
  getProducts(): Observable<Product[]>{
    // toPromise() convert to promise
    const getUrl = environment.API_URL;
    return this.httpClient.get<Product[]>(`${environment.API_URL}/products`)
      .pipe(map(products => {
        return products.map(p => {
          p.price *= 0.5;
          return p;
        });
      }));
  }
/*
 products = [
   { id: 1,
     name: 'iPhone',
     brand: 'Apple',
     price: 100,
     stock: 22,
     image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone.jpg'
   },
   { id: 2,
     name: 'iPhone3G',
     brand: 'Apple',
     price: 200,
     stock: 33,
     image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone3G.jpg'
   },
   { id: 3,
     name: 'iPhone3GS',
     brand: 'Apple',
     price: 300,
     stock: 11,
     image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone3GS.jpg'
   },
   { id: 4,
     name: 'iPhone4',
     brand: 'Apple',
     price: 400,
     stock: 22,
     image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone4.jpg'
   },
   { id: 5,
     name: 'iPhone4S',
     brand: 'Apple',
     price: 500,
     stock: 33,
     image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone4S.jpg'
   },
   { id: 6,
     name: 'iPhone5',
     brand: 'Apple',
     price: 600,
     stock: 11,
     image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone5.jpeg'
   }
 ];*/
  /*
  getProducts(): Product[]{
    return this.products;
    // or return copy of the array, then use setter to change

  }
   getProduct(id: number): Product {
    return this.products.find(item => item.id === id );
  }
  */
  // getProducts(): Promise<Product[]>{
  //   // toPromise() convert to promise
  //   const getUrl = environment.API_URL;
  //   return this.httpClient.get<Product[]>(`${environment.API_URL}/products`).toPromise();
  // }
  // getProduct(id: number): Promise<Product>{
  //   return this.httpClient.get<Product>(`${environment.API_URL}/${id}`).toPromise();
  // }


}
