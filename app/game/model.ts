import { Observable } from '@nativescript/core';
import { IScene, Scene } from '~/scene/model';
import { SceneTrial } from '~/scene_trial/model';
import { SceneTrialLocation } from '~/scene_trial_location/model';
import { SceneTrialOptions } from '~/scene_trial_options/model';

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
                let scene: IScene;
                switch (config['type']) {
                    case 'trial':
                        scene = new SceneTrial(sceneConfig, this.OnSceneDone);
                        break;
                    case 'trial-location':
                        scene = new SceneTrialLocation(sceneConfig, this.OnSceneDone);
                        break;
                    case 'trial-options':
                        scene = new SceneTrialOptions(sceneConfig, this.OnSceneDone);
                        break;
                    default:
                        scene = new Scene(sceneConfig, this.OnSceneDone);
                        break;
                }
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
