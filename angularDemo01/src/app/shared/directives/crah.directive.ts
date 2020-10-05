// color red alert hello directive
import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appCrah]'
})
export class CrahDirective{
  // 1. use element ref
  // 2. use HostBinding
  @HostBinding('style.color')
  color = '#FF0000';
  //  @HostListener add listener to event
  @HostListener('click', ['$event'])
  alertHello(event): void{
    // use template string here!
    alert(`hello ${event.target.textContent}`);
  }
  constructor() {
  }
}
