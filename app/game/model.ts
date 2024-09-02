import { Observable } from '@nativescript/core';
import { IScene, Scene } from '../scene/model';
import { GetSceneClass } from '../scene/scene-factory';
import { Logger, Severity } from '../utils/logger';

import * as geolocation from '@nativescript/geolocation';
import { CoreTypes } from '@nativescript/core' // used to describe at what accuracy the location should get



export class Game extends Observable {
    title: string;
    scenes: IScene[];
    nextScene = 0;

    constructor(gameConfig: JSON) {
        super();
        this.title = gameConfig['title'];
        Logger.Log(Severity.Info, `Initializing "${this.title}"`);

        geolocation.enableLocationRequest().then(() => {
    
            geolocation.getCurrentLocation({ desiredAccuracy: CoreTypes.Accuracy.high, maximumAge: 5000, timeout: 20000 }).then((currentLocation) => {
        
              console.log("My current latitude: ", currentLocation.latitude)
              console.log("My current longitude: ", currentLocation.longitude)
            })
          })

        // scenes
        this.scenes = [];
        if (gameConfig.hasOwnProperty('scenes')) {
            gameConfig['scenes'].forEach((sceneConfig: JSON) => {
                let sceneClass = GetSceneClass(sceneConfig);
                let scene = new sceneClass(sceneConfig, gameConfig, this.OnSceneDone.bind(this));
                scene.RequestNeededPermissions();
                this.scenes.push(scene);
            });
        }

        Logger.Log(Severity.Info, `${this.scenes.length} scenes loaded`);
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
        Logger.Log(Severity.Info, "Done - success");
    }

    ShowEndSceneFailure() {
        // ... 
        Logger.Log(Severity.Info, "Done - no success");
    }
}
