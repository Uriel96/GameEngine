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
var gameObject_model_1 = require('../models/gameObject.model');
var sprites_service_1 = require('./sprites.service');
var GameObjectsService = (function () {
    function GameObjectsService(spritesService) {
        this.spritesService = spritesService;
        this.objects = [];
        this.objects = [
            new gameObject_model_1.GameObject(this.spritesService.getSprite(0), 100, 40),
            new gameObject_model_1.GameObject(this.spritesService.getSprite(2), 0, 200)
        ];
    }
    GameObjectsService.prototype.addObject = function (newObject) {
        this.objects.push(newObject);
    };
    GameObjectsService.prototype.getObjects = function () {
        return this.objects;
    };
    GameObjectsService.prototype.getObjectByName = function (spriteName) {
        return this.objects.find(function (object) {
            return object.sprite.name == spriteName;
        });
    };
    GameObjectsService.prototype.getStaticObjects = function () {
        var newObjects = [];
        for (var i = 0; i < this.objects.length; i++) {
            if (this.objects[i].isStatic) {
                newObjects.push(this.objects[i]);
            }
        }
        return newObjects;
    };
    GameObjectsService.prototype.getObjectsByName = function (spriteName) {
        var newObjects = [];
        for (var i = 0; i < this.objects.length; i++) {
            if (this.objects[i].sprite.name == spriteName) {
                newObjects.push(this.objects[i]);
            }
        }
        return newObjects;
    };
    GameObjectsService.prototype.getObject = function (index) {
        return this.objects[index];
    };
    GameObjectsService.prototype.deleteObject = function (index) {
        this.objects.splice(index, 1);
    };
    GameObjectsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [sprites_service_1.SpritesService])
    ], GameObjectsService);
    return GameObjectsService;
}());
exports.GameObjectsService = GameObjectsService;
//# sourceMappingURL=gameObjects.service.js.map