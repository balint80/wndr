import { EventData, Page } from '@nativescript/core';
import { Game } from './model';
import fs from 'fs';

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;

    console.log(`Loading new game`);
    let config = require('../../games/tunder_kaland/game.json');
    page.bindingContext = new Game(config);
}
