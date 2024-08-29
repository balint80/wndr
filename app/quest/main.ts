import { EventData, Page } from '@nativescript/core';
import { Quest } from './model';

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
}
