import { Frame, Observable } from '@nativescript/core';

export interface IScene  {
    title: string;
    contentHtml: string;
    doneCallback: (success: boolean) => void;
    
    Show(): void;
    Done(success: boolean): void;
}

export class Scene extends Observable implements IScene {
    title: string;
    contentHtml: string;
    doneCallback: (success: boolean) => void;

    constructor(config: JSON, doneCB: (success: boolean) => void) {
        super();
        this.title = config['title'];
        this.contentHtml = config['contentHtml'];
        this.doneCallback = doneCB;
    }

    Show() {
        console.log(this.contentHtml);

        Frame.topmost().navigate({
            moduleName: 'scene/main',
            context: {}
        });
    }

    Done(success: boolean) {
        this.doneCallback(success);
    }
}