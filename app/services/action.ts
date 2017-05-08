import { Injectable } from '@angular/core';
import { Action } from '../models/action';
import { Sprite } from '../models/sprite';

@Injectable()
export class ActionService {

    constructor() {

    }

    add(sprite: Sprite, action: Action): void {
        sprite.actions.push(action);
    }
    
    get(sprite: Sprite, name: string): Action {
        return sprite.actions.find(action => action.name == name);
    }

    getAll(sprite: Sprite): Array<Action> {
        return sprite.actions;
    }

    delete(sprite: Sprite, name: string): void {
        for(var i = 0; i < sprite.actions.length; i++){
            if(sprite.actions[i].name == name){
                sprite.actions.splice(i, 1);
                return;
            }
        }
    }
}