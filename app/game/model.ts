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

    constructor(gameConfig: JSON) {
        super();
        this.title = gameConfig['title'];
        console.log(`Initializing "${this.title}"`);

        // scenes
        this.scenes = [];
        if (gameConfig.hasOwnProperty('scenes')) {
            gameConfig['scenes'].forEach((sceneConfig: JSON) => {
                let sceneClass = sceneTypeMap[gameConfig['type']];
                let scene = new sceneClass(sceneConfig, gameConfig, this.OnSceneDone.bind(this));
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
            // current scene failed, end the game
            this.ShowEndSceneFailure();
            return;
        }

        this.nextScene++;
        
        if (this.scenes.length <= this.nextScene ) {
            // all scenes done, end the game
            this.ShowEndSceneSuccess();
            return;
        }

        // go to the next scene
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
