import { EventData, Page } from '@nativescript/core';
import { Game } from './model';

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;

    var json = require('../../games/tunder_kaland/game.json');
    page.bindingContext = new Game(json);
}
