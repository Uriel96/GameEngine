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
var world_directive_1 = require('./world.directive');
var gameObject_model_1 = require('../models/gameObject.model');
var sprites_service_1 = require('../services/sprites.service');
var gameObjects_service_1 = require('../services/gameObjects.service');
var WorldComponent = (function () {
    function WorldComponent(spritesService, objectsService) {
        this.spritesService = spritesService;
        this.objectsService = objectsService;
        this.inPlayMode = false;
        this.objects = this.objectsService.getObjects();
    }
    WorldComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        /*Drop Sprites to World*/
        $("#world").droppable({
            drop: function (event, ui) {
                if (!_this.inPlayMode) {
                    var spriteName = ui.draggable.prop("id").replace("sprite", "");
                    var sprite = _this.spritesService.getSpriteByName(spriteName);
                    var newPosX = event.pageX - $("#world").offset().left;
                    var newPosY = event.pageY - $("#world").offset().top;
                    var newObject = new gameObject_model_1.GameObject(sprite, newPosX, newPosY);
                    _this.objectsService.addObject(newObject);
                }
            }
        });
    };
    WorldComponent.prototype.render = function () {
        this.world.context.fillStyle = "#FFFFFF";
        this.world.context.fillRect(0, 0, this.world.canvas.width, this.world.canvas.height);
        for (var i = 0; i < this.objectsService.getObjects().length; i++) {
            //Make Possible drag objects
            this.world.drag(this.objectsService.getObject(i));
            this.objectsService.getObject(i).render(this.world.context, this.world);
        }
    };
    WorldComponent.prototype.ngDoCheck = function () {
        if (!this.inPlayMode) {
            this.render();
        }
    };
    __decorate([
        core_1.ViewChild(world_directive_1.WorldDirective), 
        __metadata('design:type', Object)
    ], WorldComponent.prototype, "world", void 0);
    WorldComponent = __decorate([
        core_1.Component({
            selector: 'world-component',
            templateUrl: './app/world/world.html',
        }), 
        __metadata('design:paramtypes', [sprites_service_1.SpritesService, gameObjects_service_1.GameObjectsService])
    ], WorldComponent);
    return WorldComponent;
}());
exports.WorldComponent = WorldComponent;
//# sourceMappingURL=world.component.js.map