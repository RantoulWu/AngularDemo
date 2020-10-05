import {Injectable} from '@angular/core';

// starting from angular 6, can pass meta-data
@Injectable({
  // providedIn: root means the service available in root module -- top level of the application module
  // means this service can be available for all modules
  // research: making service only available in certain module
  // in angular9, new option such as in platform, in any , what does them mean?
  providedIn: 'root'
})
export class CurrencyService{
  currencyCode = 'USD';
}
