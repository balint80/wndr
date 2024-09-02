import { Scene } from '../scene/model';

export class SceneTrial extends Scene {
    solution: string;
    maxRetries: number;
    currentRetries: number;

    constructor(config: JSON, gameConfig: JSON, doneCB: (success: boolean) => void) {
        super(config, gameConfig, doneCB);
        this.solution = this.GetConfig('solution');
        this.maxRetries = this.GetGameConfig('max-trial-retries', 3);
        this.currentRetries = 0;
    }

    async CheckAnswer(): Promise<boolean> {
        return true;
    }

    async ShowNext() {
        if (await this.CheckAnswer()) {
            // correct answer, go to the next scene
            super.ShowNext(true);
        }
        else {
            this.currentRetries++;
            if (this.currentRetries <= this.maxRetries) {
                // incorrect answer, try again
                // TODO: user feedback.....
            }
            else {
                // incorrect answer and too many retries, end the game
                super.ShowNext(false);
            }
        }
    }
}
