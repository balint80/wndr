import { Observable } from '@nativescript/core';
import { SceneGroup } from '~/scene_group/model';
import { SceneTrial } from '~/scene_trial/model';
import { SceneTrialOptions } from '~/scene_trial_options/model';

export interface IScene  {
    title: string;
    contentHtml: string;
}

export class Scene extends Observable implements IScene {
    title: string;
    contentHtml: string;

    constructor(config: JSON) {
        super();

        this.title = config['title'];
        this.contentHtml = config['contentHtml'];        
    }
}

export function CreateScene(config: JSON) {
    switch (config['type']) {
        case 'group':
            return new SceneGroup(config);
        case 'trial':
            return new SceneTrial(config);
        case 'trial-options':
            return new SceneTrialOptions(config);
        default:
            return new Scene(config);
    }
}
