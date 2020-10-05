import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductsComponent} from './products/products.component';
import {ProductOverviewComponent} from './products/productOverview/productOverview.product';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {ProductDetailComponent} from './products/productDetail/productDetail.component';
import {ProductsService} from './shared/services/products.service';
import {PriceRangePipe} from './shared/pipes/price-range-pipe';
import {CurrencyExchangePipe} from './shared/pipes/currency-exchange-pipe';
import {MyShowDirective} from './shared/directives/my-show.directive';
import { HomeduplicateComponent } from './homeduplicate/homeduplicate.component';
import {MyIfDirective} from './shared/directives/my-if.directive';
import {CrahDirective} from './shared/directives/crah.directive';
import { ParentComponent } from './home/parent/parent.component';
import { ChildComponent } from './home/parent/child/child.component';
import { HttpClientModule} from '@angular/common/http';
import {FilterNamePipe} from './shared/pipes/filter-name-pipe';
import {ColorgcDirective} from './shared/directives/colorgc.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {CustomStyleModule} from './shared/modules/custom-style/custom-style.module';
import { RegisterComponent } from './register/register.component';

// decorator
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductOverviewComponent,
    HeaderComponent,
    HomeComponent,
    ProductDetailComponent,
    PriceRangePipe,
    CurrencyExchangePipe,
    MyShowDirective,
    HomeduplicateComponent,
    MyIfDirective,
    CrahDirective,
    ParentComponent,
    ChildComponent,
    FilterNamePipe,
    ColorgcDirective,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    // after angular 4.3 before it's called httpModule
    HttpClientModule,
    BrowserAnimationsModule,
    CustomStyleModule
  ],
  providers: [
    ProductsService
  ],
  // provider
  bootstrap: [AppComponent]
})
export class AppModule { }
