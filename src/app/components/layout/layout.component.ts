import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { DraggableComponent, DraggableComponentCollector } from 'src/app/services/draggable-component';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {



  get options(): GridsterConfig {
    return this.layoutService.options;
  }

  get layout(): GridsterItem[] {
    return this.layoutService.layout;
  }

  components: DraggableComponent[];

  constructor(
    private layoutService: LayoutService,
    private componentCollector: DraggableComponentCollector,
  ) {

  }

  ngOnInit() {
    this.components = this.componentCollector.getComponents();
  }

  save() {
    console.log('SAVE called');
    for (const gridItem of this.layout) {
      const componentRef = this.layoutService.getComponentRef(gridItem.id);
      console.log('LAYOUT', gridItem);
      console.log('COMPONENT', componentRef);
      
    }
    this.layoutService.save(this.layout);
  }
}
