import {Directive, ElementRef, Renderer, HostListener } from '@angular/core';
/// <reference path="babylonjs/babylon.d.ts" />
//import BABYLON = require('babylonjs');

declare var $: any;

@Directive({
    selector: '[game]'
})

export class GameDirective {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    //gl: WebGLRenderingContext;
    //engine: any;
    constructor(public element: ElementRef, public renderer: Renderer){
        this.canvas = <HTMLCanvasElement>element.nativeElement;
        this.context = this.canvas.getContext("2d");
        //this.engine = new BABYLON.Engine(this.canvas, true);
        //var scene = this.createScene();
    }

    /*createScene(): any {
        var scene = new BABYLON.Scene(this.engine);
        var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5,-10), scene);
        camera.setTarget(BABYLON.Vector3.Zero());
        camera.attachControl(this.canvas, false);
        var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene);
        var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);
        sphere.position.y = 1;
        var ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene);

        // return the created scene
        return scene;
    }*/
}