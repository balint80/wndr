import { Observable } from '@nativescript/core';
import { SceneTrial } from '~/scene_trial/model';
import { SceneTrialOptions } from '~/scene_trial_options/model';

export interface IScene  {
    title: string;
    contentHtml: string;

    subScenes: Scene[];
}

export class Scene extends Observable implements IScene {
    title: string;
    contentHtml: string;

    subScenes: Scene[];

    constructor(config: JSON) {
        super();

        this.title = config['title'];
        this.contentHtml = config['contentHtml'];
        
        // sub scenes
        this.subScenes = [];
        if (config.hasOwnProperty('scenes')) {
            config['scenes'].forEach((subSceneConfig: JSON) => {
                this.subScenes.push(CreateScene(subSceneConfig));
            });
        }
    }
}

export function CreateScene(config: JSON) {
    switch (config['type']) {
        case 'trial':
            return new SceneTrial(config);
        case 'trial-options':
            return new SceneTrialOptions(config);
        default:
            return new Scene(config);
    }
}
