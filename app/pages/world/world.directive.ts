import {Directive, ElementRef, Renderer, HostListener } from '@angular/core';
import { GameObject } from '../../models/gameObject';
import { WorldObject } from '../../models/worldObject';

declare var $: any;

@Directive({
    selector: '[world]'
})

export class WorldDirective {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    mouseX: number;
    mouseY: number;
    startX: number = 0;
    startY: number = 0;
    inDrag: boolean = false;
    mousePressed: boolean = false;
    dragging: WorldObject;
    
    constructor(public element: ElementRef, public renderer: Renderer){
        this.canvas = element.nativeElement;
        this.context = this.canvas.getContext("2d");
    }

    @HostListener('mousemove', ['$event']) onMouseMove(event) {
        this.mouseX = event.offsetX;
        this.mouseY = event.offsetY;
    }

    @HostListener('mousedown') onMouseDown() {
        this.mousePressed = true;
    }

    @HostListener('mouseup') onMouseUp() {
        this.mousePressed = false;
        this.dragging = undefined;
    }

    drag(object: WorldObject): void {
        if(this.mousePressed && (!this.dragging || this.dragging == object)) {
            var left: number = object.x;
            var right: number = object.x + object.sprite.width;
            var top: number = object.y;
            var bottom: number = object.y + object.sprite.height;
            if(!this.inDrag) {
                this.startX = this.mouseX - object.x;
                this.startY = this.mouseY - object.y;
            }
            if(this.mouseX < right && this.mouseX > left && this.mouseY < bottom && this.mouseY > top) {
                this.dragging = object;
                this.inDrag = true;
            }
        } else {
            this.inDrag = false;
        }
        if(this.inDrag) {
            object.x = this.mouseX - this.startX;
            object.y = this.mouseY - this.startY;
        }
    }
}