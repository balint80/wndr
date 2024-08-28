import { Observable } from '@nativescript/core';
import { QuestScene } from '../quest_scene/model';

export class Quest extends Observable {
    private scenes: QuestScene[];
}
