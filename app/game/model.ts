import { Frame, Observable } from '@nativescript/core';
import { IScene } from '~/scene/model';
import { SceneFactory } from '~/scene/scene_factory';

export class Game extends Observable {
    private title: string;
    private scenes: IScene[];

    constructor(config: JSON) {
        super();
        this.title = config['title'];
        console.log(`Initializing game "${this.title}"`);

        this.scenes = [];
        config['scenes'].forEach((sceneConfig: JSON) => {
            this.scenes.push(SceneFactory.CreateScene(sceneConfig));
        });
    }
/*
    startGame() {
        Frame.topmost().navigate({
            moduleName: 'scene/main',
            context: { quest: this.scenes[0] }
        });
    }*/
}
