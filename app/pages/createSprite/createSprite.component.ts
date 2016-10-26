import { Component, AfterViewInit, Input } from '@angular/core';
declare var $: any;

@Component({
    selector: 'create-sprite-modal',
    templateUrl: './app/pages/createSprite/createSprite.html'
})

export class CreateSpriteComponent implements AfterViewInit {
    @Input() sprites: Array<any>;
    sprite: any;
    constructor(){
        this.sprite = {
            name: "",
            url: "",
            width: 0,
            height: 0,
            actions: []
        };
	}
    ngAfterViewInit() {
    }
    
    createSprite(): void {
        if(!this.sprite.width) {
            this.sprite.width = $('#resize-image').get(0).naturalWidth;
        }
        if(!this.sprite.height) {
            this.sprite.height = $('#resize-image').get(0).naturalHeight;
        }
        this.sprites.push(this.sprite);
        this.close();
    }
     
    close() {
        $('#create-sprite-modal').modal('hide');
    }
    
    changeDimensions(){
        $('#resize-image-container').width($('#resize-image').get(0).naturalWidth);
        $('#resize-image-container').height($('#resize-image').get(0).naturalHeight);
    }
}