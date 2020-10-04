import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {ProductDetailComponent} from './products/productDetail/productDetail.component';
import {HomeduplicateComponent} from './homeduplicate/homeduplicate.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuard} from './auth.guard';
/*
* how to config/set up routing in angular?
* 1.config routing in app-routing module or other modules
* 2.use routerLink to trigger url changes
* 3.use placeholder router-outlet to dynamic load the component
* */
// an array of route configs
const routes: Routes = [
  {
    path: 'home0', // no / in this path!!!
    component: HomeComponent
  },
  {
    path: 'home', // no / in this path!!!
    component: HomeduplicateComponent
  },
  {
    path: 'products', // no / in this path!!!
    component: ProductsComponent,
    canActivate: [AuthGuard]
  },
  {
   // path: 'product-detail/{{product.id}}' 不推荐使用！,    // no / in beginning of this path!!!
    path: 'product-detail/:id',
    component: ProductDetailComponent
  },
  {
    path: 'login', // no / in this path!!!
    component: LoginComponent
  },
  {
   path: 'register',
    component: RegisterComponent
  },
  {
    path: 'prime',
    // used for lazy loading of module
    // angular 7 or before
    // loadChildren: './prime/prime.module#PrimeModule'
    // angular 8+ syntax
    loadChildren: () => import('./prime/prime.module').then(module => module.PrimeModule),
    canActivate: [AuthGuard] // ,
    // canLoad: [AuthGuard]
  },
  {
    path: '**',  // will match any URL, will direct to home
    redirectTo: 'home'
  }
];

@NgModule({
  // forRoot 配置root-level的路由
  // one application can only one root level routing
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
