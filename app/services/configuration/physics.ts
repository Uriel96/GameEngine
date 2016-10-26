import { Injectable, AfterViewInit } from '@angular/core';
import { GameObject } from '../../models/gameObject';
import { TimeService } from './time';
import { GameObjectsService } from '../gameObjects';

@Injectable()
export class PhysicsService {
    gravity: number = 9.8;
    friction: number = 0.8;

    constructor(
        private timeService: TimeService,
        private gameObjectsService: GameObjectsService
    ) { 
        
    }

    applyForce(gameObject: GameObject, force: number, angle: number = 0): void {
        if(gameObject.mass) {
            var forceMagnitud = force * this.timeService.deltaTime * this.timeService.deltaTime / (2 * gameObject.mass)
            gameObject.x += Math.cos(this.toRadians(angle)) * forceMagnitud;
            gameObject.y -= Math.sin(this.toRadians(angle)) * forceMagnitud;
        }
    }

    applyGravity(gameObject: GameObject, gravity: number): void {
        var newPosition = gameObject.y + (gravity * this.timeService.deltaTime * this.timeService.deltaTime / 200);
        var colliding = false;
        this.gameObjectsService.gameObjects.forEach(go2 => {
            if(this.isColliding(gameObject, go2, -1, newPosition)){
                colliding = true;
            }
        });
        if(!(gameObject._inGround = colliding)) {
            gameObject.y = newPosition;
        }
    }

    getInRadius(go1: GameObject, radius: number, initialAngle: number = 0, finalAngle: number = 360): GameObject[] {
        let newGameObjects: GameObject[] = [];
        /*this.gameObjectsService.gameObjects.forEach(go2 => {
            if(go2 != go1 && this.getDistance(go1, go2) <= radius) {
                newGameObjects.push(go2);
            }
        });*/
        return newGameObjects;
    }

    isInRadius(go1: GameObject, go2: GameObject, radius: number, initialAngle: number = 0, finalAngle: number = 360): boolean {
        if(initialAngle < 0){
            finalAngle += 360;
        }
        if(finalAngle < 0){
            finalAngle += 360;
        }
        if(finalAngle < initialAngle){
            finalAngle += 360;
        }
        if(finalAngle > 360){
            finalAngle -= 360;
            initialAngle -= 360;
        }
        var distance = this.getDistance(go1, go2);
        var angle = this.toDegrees(this.getAngle(go1, go2));
        /*context.beginPath();
        context.arc(go1.x, go2.y, radius, this.toRadians(initialAngle), this.toRadians(finalAngle), false);
        context.closePath();
        context.lineWidth = 5;
        context.fillStyle = 'red';
        context.fill();
        context.strokeStyle = '#550000';
        context.stroke();*/
        return distance <= radius && angle >= initialAngle && angle <= finalAngle;
    }

    isColliding(go1: GameObject, go2: GameObject, newPosX: number = -1, newPosY: number= -1): boolean {
        if(go1 == go2) return false;
        if(newPosX == -1){
            newPosX = go1.x;
        }
        if(newPosY == -1){
            newPosY = go1.y;
        }
        var otherX2 = go2.x + go2.width;
        var otherY2 = go2.y + go2.height;
        var thisX2 = newPosX + go1.width;
        var thisY2 = newPosY + go1.height;
        if(thisX2 > go2.x && otherX2 > newPosX) {
            if(thisY2 > go2.y && otherY2 > newPosY){
                return true;
            }
        }
        return false;
    }

    toDegrees(angle: number): number {
        var newAngle = angle * (180 / Math.PI);
        if(newAngle < 0){
            newAngle = newAngle + 360;
        }
        return newAngle;
    }

    toRadians(angle: number): number {
        return angle * (Math.PI / 180);
    }

    getDistance(go1: GameObject, go2: GameObject): number {
        var deltaX = go2.x-go1.x;
        var deltaY = go2.y-go1.y;
        return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    }

    getAngle(go1: GameObject, go2: GameObject): number {
        var deltaX = go2.x-go1.x;
        var deltaY = go1.y-go2.y;
        return Math.atan2(deltaY, deltaX);
    }

}