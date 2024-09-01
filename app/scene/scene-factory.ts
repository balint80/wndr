import { SceneTrial } from "~/scene_trial/model";
import { SceneTrialLocation } from "~/scene_trial_location/model";
import { SceneTrialOptions } from "~/scene_trial_options/model";
import { Scene } from "./model";
import { Logger, Severity } from "~/utils/logger";
import { SceneTrialPhotoAR } from "~/scene_trial_photo_ar/model";

export var sceneTypeMap = {
    'trial': SceneTrial,
    'trial-location': SceneTrialLocation,
    'trial-options': SceneTrialOptions,
    'trial-photo': SceneTrial,
    'trial-photo-ar': SceneTrialPhotoAR,
    'story': Scene
}

export function GetSceneClass(sceneConfig: JSON): any {
    let sceneType = sceneConfig['type'];
    if (sceneType === undefined) {
        return Scene;  
    }
    let sceneClass = sceneTypeMap[sceneType];
    if (sceneClass === undefined) {
        Logger.Log(Severity.Error, `"${sceneType}", not mapped to any scene class`);
        return Scene;  
    }
    return sceneClass;
}