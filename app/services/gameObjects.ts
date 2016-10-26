import { Injectable, AfterViewInit } from '@angular/core';
import { GameObject } from '../models/gameObject';

@Injectable()
export class GameObjectsService {
    gameObjects: GameObject[] = []
    constructor() { 
        
    }

}