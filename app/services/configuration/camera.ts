import { Injectable } from '@angular/core';
import { GameObject } from '../../models/gameObject';

@Injectable()
export class CameraService {
    realPositionX: number = 0;
    realPositionY: number = 0;

    constructor(
    ) {
    }

    chase(gameObject: GameObject): void {
        this.realPositionX = gameObject.x-350;
        this.realPositionY = gameObject.y-150;
    }
}