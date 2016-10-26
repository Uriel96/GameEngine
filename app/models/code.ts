import { GameObject } from './gameObject';

export class Code {
    gameObjects: GameObject[];
    constructor() {

    }

    execute(): void {
        for(var i = 0; i < this.gameObjects.length; i++){
            (<any>this).executeCode(this.gameObjects[i]);
        }
    }

    add(gameObject: GameObject): void {
        this.gameObjects.push(gameObject);
    }
}