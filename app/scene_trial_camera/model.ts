import { requestPermissions } from '@nativescript/camera'
import { SceneTrial } from '../scene_trial/model';

export class SceneTrialCamera extends SceneTrial {
    RequestNeededPermissions(): void {
        // TODO: should not ask for photo permissions - creepy
        requestPermissions().then(
            function success() {
                // TODO: success
            },
            function failure() {
                // TODO: failure
                // TODO: on IOS you can't ask again
            }); 
    }
}
