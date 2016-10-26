import { Injectable, AfterViewInit } from '@angular/core';
import { GameObject } from '../../models/gameObject';

export enum KEY {
    UpArrow = 38, 
    DownArrow = 40, 
    LeftArrow = 37,
    RightArrow = 39
}

@Injectable()
export class InputService {
    keys: any = [];

    constructor() { 
        
    }

    isKeyDown(key: number) {
        return this.keys[key] == 1 || this.keys[key] == 2;
    }

    isKeyUp(key: number) {
        return this.keys[key] == 0;
    }

    isKeyPressed(key: number) {
        return this.keys[key] == 1;
    }
}