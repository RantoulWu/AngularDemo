import {Directive, ElementRef, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[appMyShow]'
})
export class MyShowDirective implements OnChanges{
  @Input() appMyShow: boolean;
  constructor(private er: ElementRef) {
  }
  // this life cycle hook method will be called whenever
  // ngOnChanges is used for INPUT variable changes!
  ngOnChanges(): void {
    this.er.nativeElement.style.display = this.appMyShow ? '' : 'none';
  }
}
