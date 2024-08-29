import { Observable } from '@nativescript/core';
import { Scene } from '../scene/model';

export class Quest extends Observable {
    private title: string;
    private scenes: Scene[];

    constructor(config: JSON) {
        super();
        this.title = config['title'];
        
        this.scenes = [];
        config['scenes'].forEach((scene_config: JSON) => {
            var scene = new Scene(scene_config);
            this.scenes.push(scene);
        });
    }

}
