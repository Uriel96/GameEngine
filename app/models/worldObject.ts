import { Sprite } from './sprite';
import { Object } from './object';
import { Game } from './game';
import { AfterViewInit } from '@angular/core';
import { Component } from './component';
declare var $: any;

export class WorldObject extends Object {
    public readonly sprite: Sprite;
    public readonly image: HTMLImageElement;
    public components: Component[] = [];
    
    constructor(sprite: Sprite, positionX: number = 0, positionY: number = 0) {
        super(positionX, positionY, sprite.width, sprite.height);
        this.sprite = sprite;
        this.x = positionX;
        this.y = positionY;

        this.image = new Image(this.x, this.y);
        this.image.src = this.sprite.src;
    }

    render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
        ctx.drawImage(this.image, this.x, this.y, this.sprite.width, this.sprite.height);
    }
}