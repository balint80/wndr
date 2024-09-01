import { EventData, Page } from '@nativescript/core';
import { Game } from './model';
import { Logger, Severity } from '~/utils/logger';

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;

    Logger.Log(Severity.Info, `Loading new game`);
    let config = require('../../games/tunder_kaland/game.json');
    page.bindingContext = new Game(config);
}
