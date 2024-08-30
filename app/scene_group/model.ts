import { CreateScene, Scene } from "~/scene/model";

export class SceneGroup extends Scene {
    subScenes: Scene[];

    constructor(config: JSON) {
        super(config);

        // sub scenes
        this.subScenes = [];
        if (config.hasOwnProperty('scenes')) {
            config['scenes'].forEach((subSceneConfig: JSON) => {
                this.subScenes.push(CreateScene(subSceneConfig));
            });
        }
    }
}