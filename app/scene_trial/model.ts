import { Scene } from '~/scene/model';

export class SceneTrial extends Scene {
    #solution: string;

    constructor(config: JSON, doneCB: (success: boolean) => void) {
        super(config, doneCB);
        this.#solution = config['solution'];
    }

    CheckAnswer() {
        this.Done(true);
    }
}
