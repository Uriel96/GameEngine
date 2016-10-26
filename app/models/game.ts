import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { GameObject } from './gameObject';
import { PhysicsService } from '../services/configuration/physics';

export class Game implements AfterViewInit {
    gameObjects: any = {};
    debug: any;

    constructor(
    ) {
        this.debug = {
            showBoundries: function(gameObjects: GameObject[] = []) {
                if(gameObjects.length == 0){
                    
                }else{

                }
            },
            showRadius: function() {
                   
            }
        };
        /*gameObjects.forEach(go => {
            this.gameObjects[go.sprite.name] = go;
        });*/
    }

    ngAfterViewInit(): void {
        
    }

}