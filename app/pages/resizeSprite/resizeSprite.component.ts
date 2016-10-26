import { Component, AfterViewInit, Input } from '@angular/core';
declare var $: any;

@Component({
    selector: 'resize-sprite-modal',
    templateUrl: './app/pages/resizeSprite/resizeSprite.html'
})

export class ResizeSpriteComponent implements AfterViewInit {
    @Input() sprite: any;
    constructor() {
        if(this.sprite){
            if(!this.sprite.width){
                this.sprite.width = $('#resize-image').get(0).naturalWidth;
            }
            if(!this.sprite.height){
                this.sprite.height = $('#resize-image').get(0).naturalHeight;
            }
        }
    }
    ngAfterViewInit() {
        /*Resize Image*/
        $('#resize-image-container').resizable({
            minHeight: 50,
            minWidth: 50,
            width: this.sprite.width,
            height: this.sprite.height,
            aspectRatio: true
        });
    }
    
    resize(){
        this.sprite.width = $('#resize-image').width();
        this.sprite.height = $('#resize-image').height();
        this.close();
    }
    
    close() {
        $('#resize-sprite-modal').modal('hide');
    }
}