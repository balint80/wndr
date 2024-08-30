import { Observable } from '@nativescript/core';
import { IScene, Scene } from '~/scene/model';
import { SceneTrial } from '~/scene_trial/model';
import { SceneTrialLocation } from '~/scene_trial_location/model';
import { SceneTrialOptions } from '~/scene_trial_options/model';

export class Game extends Observable {
    title: string;
    scenes: IScene[];
    currentScene = 0;

    constructor(config: JSON) {
        super();
        this.title = config['title'];
        console.log(`Initializing game "${this.title}"`);

        // scenes
        this.currentScene = -1;
        this.scenes = [];
        if (config.hasOwnProperty('scenes')) {
            config['scenes'].forEach((sceneConfig: JSON) => {
                let scene: IScene;
                switch (config['type']) {
                    case 'trial':
                        scene = new SceneTrial(sceneConfig);
                        break;
                    case 'trial-location':
                        scene = new SceneTrialLocation(sceneConfig);
                        break;
                    case 'trial-options':
                        scene = new SceneTrialOptions(sceneConfig);
                        break;
                    default:
                        scene = new Scene(sceneConfig);
                        break;
                }
                this.scenes.push(scene);
            });
        }

        console.log(`${this.scenes.length} scenes loaded`);
    }

    ShowNextScene() {
        this.currentScene++;

        if (this.scenes.length <= this.currentScene) {
            // end - success
            this.ShowEndSuccess();
        }

        else {
            this.scenes[this.currentScene].Show();
        }
    }

    ShowEndSuccess() {
        // ... 
    }

    ShowEndFailure() {
        // ... 
    }
}
