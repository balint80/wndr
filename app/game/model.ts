import { Frame, Observable } from '@nativescript/core';
import { CreateScene, IScene } from '~/scene/model';

export class Game extends Observable {
    private title: string;
    private scenes: IScene[];

    constructor(config: JSON) {
        super();
        this.title = config['title'];

        this.scenes = [];
        config['scenes'].forEach((sceneConfig: JSON) => {
            this.scenes.push(CreateScene(sceneConfig));
        });
    }

    startGame() {
        Frame.topmost().navigate({
            moduleName: 'scene/main',
            context: { quest: this.scenes[0] }
        });
    }
}
