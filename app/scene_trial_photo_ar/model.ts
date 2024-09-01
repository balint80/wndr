import { SceneTrialPhoto } from '~/scene_trial_photo/model';
//import * as camera from "@nativescript/camera";
import { Image } from "@nativescript/core";

export class SceneTrialPhotoAR extends SceneTrialPhoto {
    CheckAnswer(): boolean {
  /*      camera.takePicture()
            .then((imageAsset) => {
                console.log("Result is an image asset instance");
                var image = new Image();
                image.src = imageAsset;
            }).catch((err) => {
                console.log("Error -> " + err.message);
            });
*/
        return true;
    }
}
