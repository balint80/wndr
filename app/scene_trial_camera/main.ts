import { EventData, Page } from '@nativescript/core';
import { SceneTrialCamera } from './model';

var app = require('application');

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = page.navigationContext["scene"] as SceneTrialCamera
}

export function onCreatingView(args) {
    if (app.ios) {
        // TODO: ...
    }
}