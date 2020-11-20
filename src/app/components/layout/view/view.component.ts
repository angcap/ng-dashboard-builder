import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GridsterConfig } from 'angular-gridster2';
import { DraggableComponentCollector } from 'src/app/services/draggable-component';
import { LayoutService } from 'src/app/services/layout.service';
import { LayoutComponent } from '../layout.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent extends LayoutComponent implements OnInit {

  constructor(
    private _layoutService: LayoutService,
    private _componentCollector: DraggableComponentCollector,
    private _router: Router
  ) {
    super(_layoutService, _componentCollector, _router);
  }

  private _options: GridsterConfig = {
    draggable: {
      enabled: false
    },
    pushItems: false,
    resizable: {
      enabled: false
    }
  };

  public get options(): GridsterConfig {
    return this._options;
  }
  public set options(value: GridsterConfig) {
    this._options = value;
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
