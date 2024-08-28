import { Observable } from '@nativescript/core';
import { Quest } from '../quest/model';

export class Game extends Observable {
    private title: string;
    private quests: Quest[];

    constructor(config: JSON) {
        super();

        this.title = config['title'];
    }

    /*
    private _counter: number;
    private _message: string;

    constructor() {
      super();

      // Initialize default values.
      this._counter = 42;
      this.updateMessage();
    }

    get message(): string {
      return this._message;
    }

    set message(value: string) {
      if (this._message !== value) {
        this._message = value;
        this.notifyPropertyChange('message', value);
      }
    }

    onTap() {
      this._counter--;
      this.updateMessage();
    }

    private updateMessage() {
      if (this._counter <= 0) {
        this.message =
          'Hoorraaay! You unlocked the NativeScript clicker achievement!';
      } else {
        this.message = `${this._counter} taps left`;
      }

      // log the message to the console
      console.log(this.message);
    }
    */
}
