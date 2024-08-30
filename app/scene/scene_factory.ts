import { SceneTrial } from "~/scene_trial/model";
import { Scene } from "./model";
import { SceneTrialOptions } from "~/scene_trial_options/model";
import { SceneGroup } from "~/scene_group/model";

export class SceneFactory {
    public static CreateScene(config: JSON) {
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
}