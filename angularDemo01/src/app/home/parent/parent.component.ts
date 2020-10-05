import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef, Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {ChildComponent} from './child/child.component';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements
  OnInit, OnDestroy, OnChanges,
  AfterViewInit, AfterViewChecked,
  AfterContentInit, AfterContentChecked, DoCheck{
  dataFromChild;
  // onchangeInput;
  @Input()
  ischecked: boolean;
  @ViewChild('p')
  ptag;
  @ViewChild(ChildComponent) // @ViewChild can select a component
  child: ChildComponent;

  // use ContentChild because it's passed by ng-content
  @ContentChild('hello')
  spanHello: ElementRef;

  handleEmittedData(event): void{
    this.dataFromChild = event;
  }
  constructor(
  ) { }

  ngOnInit(): void {
    console.log('this.ptag ngOnInit ', this.ptag); // is undefined because this.ptag is not ready yet
    // like the document.ready
  }
  ngAfterViewInit(): void {
    console.log('this.ptag ngAfterViewInit ', this.ptag); // Element Ref
    console.log('this.child ngAfterViewInit ', this.child); // Element Ref
  }
  /*
    1.Respond after Angular checks the component's views and child views,
   or the view that contains the directive.
    2.Called after the ngAfterViewInit()
   and every subsequent ngAfterContentChecked().
  * */
  ngAfterViewChecked(): void {
    console.log('component or child view is changed,ngAfterViewChecked executes');
  }

  ngAfterContentInit(): void {
    console.log(this.spanHello); // Element Ref
  }

  /**
   * Respond after Angular checks the content
   * projected into the directive or component.
   *
   * Called after ngAfterContentInit() and every subsequent ngDoCheck().
   */
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngOnChanges(): void {
    console.log('changed been made, ngOnChanges executes!');
  }

  /**
   * Detect and act upon changes that Angular can't or won't detect on its own.
   * Called immediately after ngOnChanges() on every change detection run,
   * and immediately after ngOnInit() on the first run.
   */
  ngDoCheck(): void {
     console.log('ngDoCheck executes immediately after ngOnChanges()!');
  }

  /* ngOnDestroy()
    Called immediately before Angular destroys the directive or component.
  * Cleanup just before Angular destroys the directive or component.
  * Unsubscribe Observables and detach event handlers to avoid memory leaks.
  * */
  ngOnDestroy(): void {
    console.log('changing route, ngOnDestroy executes!');
  }
}
