import { Component, AfterViewInit, ViewChild, Input } from '@angular/core';
import { AppDirective } from '../app/app.directive';
import { SpriteDirective } from './sprite.directive';
import { Sprite } from '../../models/sprite';
import { SpritesService } from '../../services/sprites';
import { InputService } from '../../services/configuration/input';
import { GlobalService } from '../../services/global';

declare var $: any;

@Component({
  selector: 'sprites-component',
  templateUrl: './app/pages/sprites/sprites.html',
})

export class SpritesComponent implements AfterViewInit {
    sprites: Sprite[];

    constructor(private _global: GlobalService, private spritesService: SpritesService) {
		this.sprites = this.spritesService.getSprites();
	}
    
    ngDoCheck(): void {
        
    }
    
    ngAfterViewInit(): void {
        /*Drag and Order Sprites*/
        $("#sprites-container").sortable();
        $("#sprites-container").disableSelection();
    }
    
    setSelectedSprite(spriteName: string){
        this._global.selectedSprite = this.spritesService.getSpriteByName(spriteName);
    }
    
    deleteSprite(): void {
        var selectedSprites = document.getElementsByClassName("list-group-item active");
        if(selectedSprites[0]) {
            var spriteName = selectedSprites[0].id.replace("sprite", "");
            this.spritesService.deleteSprite(spriteName);
        }
    }
}