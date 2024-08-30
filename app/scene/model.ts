import { Observable } from '@nativescript/core';

export interface IScene  {
    title: string;
    contentHtml: string;
}

export class Scene extends Observable implements IScene {
    title: string;
    contentHtml: string;

    constructor(config: JSON) {
        super();

        this.title = config['title'];
        this.contentHtml = config['contentHtml'];
    }
}