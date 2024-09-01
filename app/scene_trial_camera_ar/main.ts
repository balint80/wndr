import { EventData, Page } from '@nativescript/core';
import { SceneTrialCamera } from '~/scene_trial_camera/model';

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    console.log("hello");
    page.bindingContext = page.navigationContext["scene"] as SceneTrialCamera
}
