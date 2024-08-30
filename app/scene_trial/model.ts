import { Scene } from '~/scene/model';

export class SceneTrial extends Scene {
    #solution: string;

    constructor(config: JSON) {
        super(config);
        this.#solution = config['solution'];
    }
}
