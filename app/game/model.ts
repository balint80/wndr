import { Frame, Observable } from '@nativescript/core';
import { Quest } from '../quest/model';

export class Game extends Observable {
    private title: string;
    private quests: Quest[];

    constructor(config: JSON) {
        super();
        this.title = config['title'];

        this.quests = [];
        config['quests'].forEach((quest_config: JSON) => {
            var quest = new Quest(quest_config);
            this.quests.push(quest);
        });
    }

    startGame() {
        Frame.topmost().navigate({
            moduleName: 'quest/main',
            context: { quest: this.quests[0] }
        });
    }
}
