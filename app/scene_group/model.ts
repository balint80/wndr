import { Scene } from "~/scene/model";
import { SceneFactory } from '~/scene/scene_factory';

export class SceneGroup extends Scene {
    subScenes: Scene[];

    constructor(config: JSON) {
        super(config);

        this.subScenes = [];
        if (config.hasOwnProperty('scenes')) {
            config['scenes'].forEach((subSceneConfig: JSON) => {
                this.subScenes.push(SceneFactory.CreateScene(subSceneConfig));
            });
        }
    }
}