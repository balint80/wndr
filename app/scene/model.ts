import { Frame, Observable } from '@nativescript/core';

export interface IScene  {
    title: string;
    contentHtml: string;
    doneCallback: (success: boolean) => void;
    
    Show(): void;
    Done(): void;
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
        Frame.topmost().navigate({
            moduleName: 'scene/main',
            context: { scene: this }
        });
    }

    Done() {
        this.doneCallback(true);
    }
}