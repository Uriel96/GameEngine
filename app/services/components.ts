import { Injectable } from '@angular/core';
import { Component } from '../models/component';
import { KEY } from './configuration/input';
import { PhysicsService } from './configuration/physics';
import { GameObject } from '../models/gameObject';

@Injectable()
export class ComponentsService {
    components: Component[];
    constructor(
    ) {
        this.components = [
            new Component(
                `gameObject.applyGravity();
                if(keyboard.isKeyDown(KEY.RightArrow)){
                    gameObject.moveRight(5);
                } else if(keyboard.isKeyDown(KEY.LeftArrow)){
                    gameObject.moveLeft(5);
                }
                if(keyboard.isKeyDown(KEY.UpArrow) && timer.time == 0){
                    timer.initializeTimer();
                }
                if(timer.time > 0 && timer.time < 200) {
                    physics.applyForce(gameObject, 4, 90);
                } else if(gameObject.inGround && keyboard.isKeyUp(KEY.UpArrow)){
                    timer.clearTimer();
                }
                
                /*var objetos = physics.getInRadius(gameObject, 100);
                if(objetos.length > 0){
                    console.log(objetos);
                }
                if(physics.isInRadius(gameObjects.piso, gameObject, 100, 0, 90)){
                    console.log("este no debe entrar");
                }
                if(physics.isInRadius(gameObjects.piso, gameObject, 300, -50 , 50)){
                    console.log("este si debería entrar");
                }*/
                `
            )
        ];
    }
}