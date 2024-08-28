import { EventData, Page } from '@nativescript/core';
import { Game } from './model';

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;

    page.bindingContext = new Game();
}
