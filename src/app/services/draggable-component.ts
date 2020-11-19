import { Inject, Injectable, Type } from '@angular/core';

export interface DraggableComponent {

    id: string;
    name: string;
    type: Type<any>;
    description: string;
}

export class DroppableComponent implements DraggableComponent {
    id: string;
    name: string;
    type: Type<any>;
    description: string;
    dropId: string;
}

@Injectable({
    providedIn: 'root',
})
export class DraggableComponentCollector {
    private _components: DraggableComponent[];

    constructor(@Inject('DraggableComponent') components: DraggableComponent[]) {
        this._components = components;
    }

    getComponents(): DraggableComponent[] {
        return this._components;
    }
}
