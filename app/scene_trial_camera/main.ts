import { EventData, Page } from '@nativescript/core';
import { SceneTrialCamera } from './model';

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = page.navigationContext["scene"] as SceneTrialCamera
}
