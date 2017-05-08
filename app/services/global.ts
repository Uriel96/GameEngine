import { Injectable } from '@angular/core';
import { Sprite } from '../models/sprite';

@Injectable()
export class GlobalService {
    selectedSprite: Sprite;
}