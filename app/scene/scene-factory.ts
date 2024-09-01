import { SceneTrial } from "~/scene_trial/model";
import { SceneTrialLocation } from "~/scene_trial_location/model";
import { SceneTrialOptions } from "~/scene_trial_options/model";
import { Scene } from "./model";
import { Logger, Severity } from "~/utils/logger";
import { SceneTrialCameraAR } from "~/scene_trial_camera_ar/model";

export var sceneTypeMap = {
    'trial': SceneTrial,
    'trial-location': SceneTrialLocation,
    'trial-options': SceneTrialOptions,
    'trial-camera': SceneTrial,
    'trial-camera-ar': SceneTrialCameraAR,
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