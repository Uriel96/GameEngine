import { Component, AfterViewInit, Input } from '@angular/core';
import { Sprite } from '../../../models/sprite';
import { SpritesService } from '../../../services/sprites';
declare var $: any;

@Component({
    selector: 'create-sprite-modal',
    templateUrl: './app/pages/sprites/createSprite/createSprite.html'
})

export class CreateSpriteComponent implements AfterViewInit {

    /** The Sprite that is to be created */
    @Input() sprite: Sprite;

    constructor(private _sprites: SpritesService) {
        
	}
    
    ngAfterViewInit() {
        
    }

    ngOnInit() {
        if(!this.sprite){
            this.sprite = {
                name: "",
                src: "",
                width: 0,
                height: 0,
                code: ""
            };
        }  
    }
    
    /**
     * Creates a new Sprite Based on the options the user used.
     */
    createSprite(): void {
        //Set the size of the Sprite to the size of the image.
        if(!this.sprite.width) {
            this.sprite.width = $('#resize-image').get(0).naturalWidth;
        }
        if(!this.sprite.height) {
            this.sprite.height = $('#resize-image').get(0).naturalHeight;
        }
        //Adds a new sprite
        this._sprites.createSprite(this.sprite);
        this.close();
    }
     
    /** 
     * Closes the Sprite Modal Window.
     */
    close() : void {
        $('#create-sprite-modal').modal('hide');
    }
    
    /**
     * Resizes the image.
     */
    changeDimensions(): void {
        $('#resize-image-container').width($('#resize-image').get(0).naturalWidth);
        $('#resize-image-container').height($('#resize-image').get(0).naturalHeight);
    }
}