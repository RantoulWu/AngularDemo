import {Component, DoCheck, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  data: string;
  // child to parent communication
  /*
  * in child .ts file use @Output decorator to decorate an EventEmitter object
  * we can then emit an event which carries the data to parent
  * and in parent.html we can use event-binding to handle this data
  * */
  @Output()
  emitData: EventEmitter<string> = new EventEmitter<string>(); // use EventEmitter from angular/core!
  constructor() { }

  ngOnInit(): void {
  }
  handleSendData(): void {
    this.emitData.emit(this.data);
  }
  // ngDoCheck(): void {
  //   console.log('~~~~~~~~child component do check executes');
  // }

}
