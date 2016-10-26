"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
/// <reference path="babylonjs/babylon.d.ts" />
var BABYLON = require('babylonjs');
var GameDirective = (function () {
    function GameDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.canvas = element.nativeElement;
        //this.context = this.canvas.getContext("2d");
        this.engine = new BABYLON.Engine(this.canvas, true);
        var scene = this.createScene();
    }
    GameDirective.prototype.createScene = function () {
        var scene = new BABYLON.Scene(this.engine);
        var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);
        camera.setTarget(BABYLON.Vector3.Zero());
        camera.attachControl(this.canvas, false);
        var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
        var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);
        sphere.position.y = 1;
        var ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene);
        // return the created scene
        return scene;
    };
    GameDirective = __decorate([
        core_1.Directive({
            selector: '[game]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], GameDirective);
    return GameDirective;
}());
exports.GameDirective = GameDirective;
//# sourceMappingURL=game.directive.js.map