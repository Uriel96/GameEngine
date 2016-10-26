import { Sprite } from './sprite';
import { Object } from './object';
import { Game } from './game';
import { AfterViewInit } from '@angular/core';
import { WorldObject } from './worldObject';
import { PhysicsService } from '../services/configuration/physics';
import { InputService } from '../services/configuration/input';
import { TimeService } from '../services/configuration/time';
import { Component } from './component';
import { CameraService } from '../services/configuration/camera';

export class GameObject extends Object {
    public velocityY: number = 0;
    public velocityX: number = 0;
    public readonly sprite: Sprite;
    public readonly image: HTMLImageElement;
    public mass: number;
    public components: Component[] = [];

    private _friction: number;
    public _inGround: boolean;
    private _hasGravity: boolean;
    public readonly isStatic: boolean;
    
    constructor(
        private worldObject: WorldObject, 
        private inputService: InputService, 
        private physicsService: PhysicsService, 
        private timeService: TimeService,
    ) {
        super(worldObject.x, worldObject.y, worldObject.sprite.width, worldObject.sprite.height);
        this.sprite = worldObject.sprite;
        this._friction = 0.8;
        this._inGround = false;
        this._hasGravity = false;
        this.components = worldObject.components;
        this.mass = 20;

        this.image = new Image(this.x, this.y);
        this.image.src = this.sprite.src;
    }

    get friction(): number { return this._friction; }
    set friction(newFriction: number) {
        if(newFriction < 0 || newFriction > 1){
            throw new RangeError("");
        }
        this._friction = newFriction;
    }
    get inGround(): boolean { return this._inGround; }
    get hasGravity(): boolean { return this._hasGravity; }

    moveRight(speed: number): void {
        if (this.velocityX < speed) {
            this.velocityX++;
        }
    }
    moveLeft(speed: number): void {
        if (this.velocityX > -speed) {
            this.velocityX--;
        }
    }
    moveUp(speed: number): void {
        if (this.velocityY > speed) {
            this.velocityY--;
        }
    }
    moveDown(speed: number): void {
        if (this.velocityY < speed) {
            this.velocityY++;
        }
    }

    isColliding(otherObject: GameObject): boolean {
        var otherX2 = otherObject.x+otherObject.width;
        var otherY2 = otherObject.y+otherObject.height;
        var thisX2 = this.x+this.width;
        var thisY2 = this.y+this.height;
        if(thisX2 > otherObject.x && otherX2 > this.x){
            if(thisY2 > otherObject.y && otherY2 > this.y){
                return true;
            }
        }
        return false;
    }

    applyGravity(gravity: number = 9.8): void {
        this.physicsService.applyGravity(this, gravity);
    }

    update(): void {
        if(!this._hasGravity){
            this.velocityY *= this._friction;
            this.y += this.velocityY * this.timeService.deltaTime / 10;
        }
        this.velocityX *= this._friction;
        this.x += this.velocityX * this.timeService.deltaTime / 10;
    }

    render(cameraService: CameraService, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
        ctx.drawImage(this.image, this.x-cameraService.realPositionX, this.y-cameraService.realPositionY, this.sprite.width, this.sprite.height);
    }
}