import { SceneTrial } from '~/scene_trial/model';
import { requestPermissions } from '@nativescript/camera'

export class SceneTrialCamera extends SceneTrial {
    RequestNeededPermissions(): void {
        requestPermissions()
    }
}
