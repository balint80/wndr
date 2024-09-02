import { SceneTrialCamera } from '../scene_trial_camera/model';
//import * as camera from "@nativescript/camera";
import { Image } from "@nativescript/core";

export class SceneTrialCameraAR extends SceneTrialCamera {
    async CheckAnswer(): Promise<boolean> {

        return true;
    }
}
