import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective{
  constructor(
    private tr: TemplateRef<any>,
    private vr: ViewContainerRef
  ) {}
  @Input()
  set appMyIf(isAuthenticated){ // JS setter
    // ViewContainerRef & TemplateRef
    !isAuthenticated ? this.vr.clear() : this.vr.createEmbeddedView(this.tr);
  }

}
