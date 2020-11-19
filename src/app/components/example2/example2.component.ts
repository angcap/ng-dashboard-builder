import { Component, OnInit, Type } from '@angular/core';
import { DraggableComponent } from 'src/app/services/draggable-component';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.scss']
})
export class Example2Component implements OnInit, DraggableComponent {

  constructor() { }

  get id(): string {
    return 'example2';
  }
  get name(): string {
    return 'Example2Component';
  }
  get type(): Type<any> {
    return Example2Component;
  }
  get description(): string {
    return 'Example 2';
  }

  ngOnInit() {
  }

}
