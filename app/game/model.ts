import { Observable } from '@nativescript/core';
import { Quest } from '../quest/model';

export class Game extends Observable {
    private title: string;
    private quests: Quest[];

    constructor(config: JSON) {
        super();
        this.title = config['title'];

        this.quests = [];
        config['quests'].forEach((quest_config) => {
            var quest = new Quest(quest_config as JSON);
            this.quests.push(quest);
        });
    }
}
