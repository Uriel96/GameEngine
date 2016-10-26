import { Injectable } from '@angular/core';
import { SpritesService } from './sprites';
import { WorldObject } from '../models/worldObject';
import { Component } from '../models/component';
import { ComponentsService } from './components';

@Injectable()
export class WorldObjectsService {
    objects: WorldObject[] = [];

    constructor(
        private spritesService: SpritesService,
        private componentService: ComponentsService
    ) {
        this.objects = [
            new WorldObject(this.spritesService.getSprite(0), 100, 40), 
            new WorldObject(this.spritesService.getSprite(2), 0, 200),
            new WorldObject(this.spritesService.getSprite(2), 300, 300),
            new WorldObject(this.spritesService.getSprite(2), 600, 200)
        ];
        //Add first component to first world object
        this.objects[0].components.push(this.componentService.components[0]);
    }

    addObject(newObject: WorldObject): void {
        this.objects.push(newObject);
    }

    getObjects(): WorldObject[] {
        return this.objects;
    }

    getObjectByName(spriteName: string): WorldObject {
        return this.objects.find((object) => {
            return object.sprite.name == spriteName;
        });
    }

    getStaticObjects(): WorldObject[] {
        var newObjects: WorldObject[] = [];
        for(var i = 0; i < this.objects.length; i++){
            /*if(this.objects[i].isStatic){
                newObjects.push(this.objects[i]);
            }*/
        }
        return newObjects;
    }

    getObjectsByName(spriteName: string): WorldObject[] {
        var newObjects: WorldObject[] = [];
        for(var i = 0; i < this.objects.length; i++){
            if(this.objects[i].sprite.name == spriteName){
                newObjects.push(this.objects[i]);
            }
        }
        return newObjects;
    }

    getObject(index: number): WorldObject {
        return this.objects[index];
    }

    deleteObject(index: number): void {
        this.objects.splice(index, 1);
    }
}