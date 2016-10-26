import { Component, AfterViewInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { WorldDirective } from './world.directive';
import { Sprite } from '../../models/sprite';
import { GameObject } from '../../models/gameObject';
import { SpritesService } from '../../services/sprites';
import { WorldObjectsService } from '../../services/worldObjects';
import { RuntimeExecutionService } from '../../services/runtimeExecution';
import { WorldObject } from '../../models/worldObject';

declare var $: any;

@Component({
  selector: 'world-component',
  templateUrl: './app/pages/world/world.html',
})

export class WorldComponent implements AfterViewInit {
    @ViewChild(WorldDirective) world: WorldDirective;
    objects: WorldObject[];
    constructor(
        private runtimeExecution: RuntimeExecutionService,
        private spritesService: SpritesService, 
        private worldObjectsService: WorldObjectsService
    ) {
        this.objects = this.worldObjectsService.getObjects();
    }

    ngAfterViewInit(): void {
        /*Drop Sprites to World*/
        $("#world").droppable({
            drop: (event, ui) => {
                if(!this.runtimeExecution.isInPlayMode()){
                    var spriteName = ui.draggable.prop("id").replace("sprite", "");
                    var sprite = this.spritesService.getSpriteByName(spriteName);
                    var newPosX = event.pageX - $("#world").offset().left;
                    var newPosY = event.pageY - $("#world").offset().top;
                    var newObject = new WorldObject(sprite, newPosX, newPosY);
                    this.worldObjectsService.addObject(newObject);
                }
            }
        });
    }
    
    ngDoCheck(): void {
        if(!this.runtimeExecution.isInPlayMode()){
            this.render();
        }
    }

    render(): void {
        this.world.context.fillStyle = "#FFFFFF";
        this.world.context.fillRect(0, 0, this.world.canvas.width, this.world.canvas.height);
        this.worldObjectsService.getObjects().forEach(worldObject => {
            //Make Possible drag objects
            this.world.drag(worldObject);
            worldObject.render(this.world.context, this.world.canvas);
        });
    }
}