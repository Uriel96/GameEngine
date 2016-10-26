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
var sprites_1 = require('./sprites');
var worldObject_1 = require('../models/worldObject');
var components_1 = require('./components');
var WorldObjectsService = (function () {
    function WorldObjectsService(spritesService, componentService) {
        this.spritesService = spritesService;
        this.componentService = componentService;
        this.objects = [];
        this.objects = [
            new worldObject_1.WorldObject(this.spritesService.getSprite(0), 100, 40),
            new worldObject_1.WorldObject(this.spritesService.getSprite(2), 0, 200),
            new worldObject_1.WorldObject(this.spritesService.getSprite(2), 300, 300),
            new worldObject_1.WorldObject(this.spritesService.getSprite(2), 600, 200)
        ];
        //Add first component to first world object
        this.objects[0].components.push(this.componentService.components[0]);
    }
    WorldObjectsService.prototype.addObject = function (newObject) {
        this.objects.push(newObject);
    };
    WorldObjectsService.prototype.getObjects = function () {
        return this.objects;
    };
    WorldObjectsService.prototype.getObjectByName = function (spriteName) {
        return this.objects.find(function (object) {
            return object.sprite.name == spriteName;
        });
    };
    WorldObjectsService.prototype.getStaticObjects = function () {
        var newObjects = [];
        for (var i = 0; i < this.objects.length; i++) {
        }
        return newObjects;
    };
    WorldObjectsService.prototype.getObjectsByName = function (spriteName) {
        var newObjects = [];
        for (var i = 0; i < this.objects.length; i++) {
            if (this.objects[i].sprite.name == spriteName) {
                newObjects.push(this.objects[i]);
            }
        }
        return newObjects;
    };
    WorldObjectsService.prototype.getObject = function (index) {
        return this.objects[index];
    };
    WorldObjectsService.prototype.deleteObject = function (index) {
        this.objects.splice(index, 1);
    };
    WorldObjectsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [sprites_1.SpritesService, components_1.ComponentsService])
    ], WorldObjectsService);
    return WorldObjectsService;
}());
exports.WorldObjectsService = WorldObjectsService;
//# sourceMappingURL=worldObjects.js.map