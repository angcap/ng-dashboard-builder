import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GridsterModule } from 'angular-gridster2';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { Example1Component } from './components/example1/example1.component';
import { Example2Component } from './components/example2/example2.component';
import { LayoutItemDirective } from './directives/layout-item.directive';
import { DraggableComponentCollector } from './services/draggable-component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    Example1Component,
    Example2Component,
    LayoutItemDirective
  ],
  imports: [
    BrowserModule,
    GridsterModule
  ],
  providers: [
    { provide: 'DraggableComponent', multi: true, useClass: Example1Component },
    { provide: 'DraggableComponent', multi: true, useClass: Example2Component },
    DraggableComponentCollector
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    Example1Component,
    Example2Component
  ]
})
export class AppModule { }
