import { SceneTrial } from '../scene_trial/model';

export class SceneTrialOptions extends SceneTrial {
    options: string[];

    constructor(config: JSON, gameConfig: JSON, doneCB: (success: boolean) => void) {
        super(config, gameConfig, doneCB);

        this.options = [];
        this.GetConfig('options').forEach((option: string) => {
            this.options.push(option);
        });
    }
}
