import { Observable } from '@nativescript/core';

export class Scene extends Observable {
    private type: string;

    constructor(config: JSON) {
        super();
        this.type = config['type'];
    }
}
