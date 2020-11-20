import { Injectable } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { UUID } from 'angular2-uuid';
import { LocalStorage, WebstorableArray } from 'ngx-store';
import { DraggableComponent, DraggableComponentCollector, DroppableComponent } from './draggable-component';

export class GridEntity {
  layout: GridsterItem; componentRef: string;
}

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  @LocalStorage() storedGrid: WebstorableArray<GridEntity>;

  public options: GridsterConfig = {
    draggable: {
      enabled: true
    },
    pushItems: true,
    resizable: {
      enabled: true
    }
  };

  private _layout: GridsterItem[] = [];
  private components: DroppableComponent[] = [];


  dropId: string;

  get layout(): GridsterItem[] {
    if (this._layout === undefined || this._layout.length === 0) {
      this.loadData();
    }
    return this._layout;
  }

  constructor(
    private componentCollector: DraggableComponentCollector
  ) {

  }

  addItem(): void {
    this._layout.push({
      cols: 5,
      id: UUID.UUID(),
      rows: 5,
      x: 0,
      y: 0
    });
  }

  deleteItem(id: string): void {
    const item = this._layout.find(d => d.id === id);
    this._layout.splice(this._layout.indexOf(item), 1);
    const comp = this.components.find(c => c.id === id);
    this.components.splice(this.components.indexOf(comp), 1);
  }

  setDropId(dropId: string): void {
    this.dropId = dropId;
  }

  dropItem(dragId: string, dropId?: string): void {

    const comp = this.componentCollector.getComponents().find(c => c.id === dragId) as DroppableComponent;
    comp.dropId = dropId ? dropId : this.dropId;
    this.components.push(comp);
  }

  getComponentRef(dropId: string): string {
    const comp = this.components.find(c => c.dropId === dropId);
    return comp ? comp.id : null;
  }

  save(grids: GridsterItem[]) {
    this.storedGrid = <any>grids.map(layout => ({ layout, componentRef: this.getComponentRef(layout.id) }));
    this.storedGrid.save();

  }

  loadData() {
    const grid: GridEntity[] = this.storedGrid;
    if (grid) {
      for (const g of this.storedGrid) {
        console.log('loading', g);
        this._layout.push(g.layout);
        this.dropItem(g.componentRef, g.layout.id);
      }
    }
  }
}
