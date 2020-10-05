import {Directive, ElementRef, HostBinding, OnInit} from '@angular/core';

@Directive({
  selector: '[appColorGc]',
})
export class ColorgcDirective implements OnInit{
  // @HostBinding('style.color')
  colorR = '2B';
  colorG = '00';
  colorB = '00';
  interval;
  toHex(decimalNum): string{
    return decimalNum.toString();
  }
  toDecimal(hexString): number{
    return parseInt(hexString, 16);
  }
  constructor(private er: ElementRef) {
  }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      const newColor = '#' + this.colorR + this.colorG + this.colorB;
      this.er.nativeElement.style.color  = newColor;
      // this.color_r = this.toHex(this.toDecimal(this.color_r) + 1);
      // this.color_g = this.toHex(this.toDecimal(this.color_g) + 1);
      this.colorB = this.toHex(this.toDecimal(this.colorB) + 1);
      this.colorG = this.toHex(this.toDecimal(this.colorG) + 1);
    }, 200);
    setTimeout( function(): void{
      clearInterval(this.interval);
    }, 3600 );
  }
}
