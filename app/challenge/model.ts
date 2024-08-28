import { Scene } from '../quest_scene/model';

export class Challenge extends Scene {
    private solution: string;

    public checkAnswer(answer: string) : boolean
    {
        return answer == this.solution;
    }
}
