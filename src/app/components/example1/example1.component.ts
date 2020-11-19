import { Component, OnInit, Type } from '@angular/core';
import { DraggableComponent } from 'src/app/services/draggable-component';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.scss']
})
export class Example1Component implements OnInit, DraggableComponent {

  constructor() { }

  get id(): string {
    return 'example1';
  }
  get name(): string {
    return 'Example1Component';
  }
  get type(): Type<any> {
    return Example1Component;
  }
  get description(): string {
    return 'Example 1';
  }

  ngOnInit() {
  }

}
