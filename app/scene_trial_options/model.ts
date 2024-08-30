import { SceneTrial } from '~/scene_trial/model';

export class SceneTrialOptions extends SceneTrial {
    options: string[];

    constructor(config: JSON) {
        super(config);

        this.options = [];
        if (config.hasOwnProperty('options')) {
            config['options'].forEach((option: string) => {
                this.options.push(option);
            });
        }
    }
}
