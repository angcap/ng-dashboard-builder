import { Directive, Input, OnChanges, ViewContainerRef, ComponentFactoryResolver, ComponentRef, Inject } from '@angular/core';

import { Example1Component } from '../components/example1/example1.component';
import { Example2Component } from '../components/example2/example2.component';
import { DraggableComponent, DraggableComponentCollector } from '../services/draggable-component';

// const components = {
//   example1: Example1Component,
//   example2: Example2Component
// };

@Directive({
  selector: '[appLayoutItem]'
})
export class LayoutItemDirective implements OnChanges {

  @Input() componentRef: string;

  component: ComponentRef<any>;
  private components: DraggableComponent[];

  constructor(
    private container: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    private componentCollector: DraggableComponentCollector
  ) {
    this.components = componentCollector.getComponents();
  }

  ngOnChanges(): void {

    const component = this.components.find(c => c.id === this.componentRef);

    if (component) {
      const factory = this.resolver.resolveComponentFactory<any>(component.type);
      this.component = this.container.createComponent(factory);
    }

  }

}
