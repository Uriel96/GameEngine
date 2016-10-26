import {Directive, ElementRef, Renderer, HostListener, ViewChild, EventEmitter, Output } from '@angular/core';
import { SpritesComponent } from './sprites.component';
declare var $: any;

@Directive({
    selector: '[sprite]'
})

export class SpriteDirective {
    @Output() selectedSpriteChanged = new EventEmitter();
    sprite: HTMLLIElement;

    constructor(public element: ElementRef, public renderer: Renderer){
        this.sprite = this.element.nativeElement;
    }

    /*Select an Sprite*/
    @HostListener('click', ['$event']) onClick(event: MouseEvent) {
        event.preventDefault();
        $(this.sprite).parent().find('li').removeClass('active');
        $(this.sprite).addClass('active');
        this.selectedSpriteChanged.emit(this.sprite.id.replace("sprite", ""));
    }
}