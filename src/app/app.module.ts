import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GridsterModule } from 'angular-gridster2';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { Example1Component } from './components/example1/example1.component';
import { Example2Component } from './components/example2/example2.component';
import { LayoutItemDirective } from './directives/layout-item.directive';
import { DraggableComponentCollector } from './services/draggable-component';
import { ViewComponent } from './components/layout/view/view.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '', component: LayoutComponent
},
{ path: 'view', component: ViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    Example1Component,
    Example2Component,
    LayoutItemDirective,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    GridsterModule,
    RouterModule.forRoot(routes)
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
