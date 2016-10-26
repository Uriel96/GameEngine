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
var sprites_1 = require('../../services/sprites');
var worldObjects_1 = require('../../services/worldObjects');
var runtimeExecution_1 = require('../../services/runtimeExecution');
var worldObject_1 = require('../../models/worldObject');
var WorldComponent = (function () {
    function WorldComponent(runtimeExecution, spritesService, worldObjectsService) {
        this.runtimeExecution = runtimeExecution;
        this.spritesService = spritesService;
        this.worldObjectsService = worldObjectsService;
        this.objects = this.worldObjectsService.getObjects();
    }
    WorldComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        /*Drop Sprites to World*/
        $("#world").droppable({
            drop: function (event, ui) {
                if (!_this.runtimeExecution.isInPlayMode()) {
                    var spriteName = ui.draggable.prop("id").replace("sprite", "");
                    var sprite = _this.spritesService.getSpriteByName(spriteName);
                    var newPosX = event.pageX - $("#world").offset().left;
                    var newPosY = event.pageY - $("#world").offset().top;
                    var newObject = new worldObject_1.WorldObject(sprite, newPosX, newPosY);
                    _this.worldObjectsService.addObject(newObject);
                }
            }
        });
    };
    WorldComponent.prototype.ngDoCheck = function () {
        if (!this.runtimeExecution.isInPlayMode()) {
            this.render();
        }
    };
    WorldComponent.prototype.render = function () {
        var _this = this;
        this.world.context.fillStyle = "#FFFFFF";
        this.world.context.fillRect(0, 0, this.world.canvas.width, this.world.canvas.height);
        this.worldObjectsService.getObjects().forEach(function (worldObject) {
            //Make Possible drag objects
            _this.world.drag(worldObject);
            worldObject.render(_this.world.context, _this.world.canvas);
        });
    };
    __decorate([
        core_1.ViewChild(world_directive_1.WorldDirective), 
        __metadata('design:type', world_directive_1.WorldDirective)
    ], WorldComponent.prototype, "world", void 0);
    WorldComponent = __decorate([
        core_1.Component({
            selector: 'world-component',
            templateUrl: './app/pages/world/world.html',
        }), 
        __metadata('design:paramtypes', [runtimeExecution_1.RuntimeExecutionService, sprites_1.SpritesService, worldObjects_1.WorldObjectsService])
    ], WorldComponent);
    return WorldComponent;
}());
exports.WorldComponent = WorldComponent;
//# sourceMappingURL=world.component.js.map