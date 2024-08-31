import { Observable } from '@nativescript/core';
import { IScene, Scene } from '~/scene/model';
import { SceneTrial } from '~/scene_trial/model';
import { SceneTrialLocation } from '~/scene_trial_location/model';
import { SceneTrialOptions } from '~/scene_trial_options/model';

var sceneTypeMap = {
    'trial': SceneTrial,
    'trial-location': SceneTrialLocation,
    'trial-options': SceneTrialOptions,
    'trial-photo': SceneTrial,
    'trial-photo-ar': SceneTrial,
    'story': Scene,
    undefined: Scene
}

export class Game extends Observable {
    title: string;
    scenes: IScene[];
    nextScene = 0;

    constructor(config: JSON) {
        super();
        this.title = config['title'];
        console.log(`Initializing "${this.title}"`);

        // scenes
        this.scenes = [];
        if (config.hasOwnProperty('scenes')) {
            config['scenes'].forEach((sceneConfig: JSON) => {
                let sceneClass = sceneTypeMap[config['type']];
                let scene = new sceneClass(sceneConfig, this.OnSceneDone.bind(this));
                this.scenes.push(scene);
            });
        }

        console.log(`${this.scenes.length} scenes loaded`);
    }

    StartGame() {
        this.nextScene = 0;
        this.scenes[this.nextScene].Show();
    }

    OnSceneDone(success: boolean) {
        if (!success) {
            this.ShowEndSceneFailure();
            return;
        }

        this.nextScene++;
        
        if (this.scenes.length <= this.nextScene ) {
            this.ShowEndSceneSuccess();
            return;
        }

        this.scenes[this.nextScene].Show();
    }

    ShowEndSceneSuccess() {
        // ... 
        console.log("Done - success");
    }

    ShowEndSceneFailure() {
        // ... 
        console.log("Done - no success");
    }
}
