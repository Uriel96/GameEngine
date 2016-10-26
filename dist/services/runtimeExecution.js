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
var gameObject_1 = require('../models/gameObject');
var worldObjects_1 = require('./worldObjects');
var components_1 = require('./components');
var input_1 = require('./configuration/input');
var time_1 = require('./configuration/time');
var physics_1 = require('./configuration/physics');
var gameObjects_1 = require('./gameObjects');
var RuntimeExecutionService = (function () {
    function RuntimeExecutionService(timeService, physicsService, inputService, componentsService, worldObjectsService, gameObjectsService) {
        this.timeService = timeService;
        this.physicsService = physicsService;
        this.inputService = inputService;
        this.componentsService = componentsService;
        this.worldObjectsService = worldObjectsService;
        this.gameObjectsService = gameObjectsService;
        this.running = false;
    }
    RuntimeExecutionService.prototype.run = function (canvas, context) {
        var _this = this;
        this.timeService.timer = setInterval(function () {
            _this.update();
            _this.render(canvas, context);
        }, 10);
    };
    RuntimeExecutionService.prototype.update = function () {
        var _this = this;
        if (!this.running)
            return;
        this.timeService.setTime();
        this.gameObjectsService.gameObjects.forEach(function (gameObject) {
            gameObject.components.forEach(function (component) {
                component.executeCode(gameObject, _this.inputService, input_1.KEY, _this.physicsService, _this.timeService, _this.gameObjectsService.gameObjects);
            });
        });
    };
    RuntimeExecutionService.prototype.stop = function () {
        this.gameObjectsService.gameObjects = [];
        this.timeService.clear();
    };
    RuntimeExecutionService.prototype.render = function (canvas, context) {
        if (!this.running)
            return;
        context.fillStyle = "#FFFFFF";
        context.fillRect(0, 0, canvas.width, canvas.height);
        this.gameObjectsService.gameObjects.forEach(function (gameObject) {
            gameObject.update();
            gameObject.render(context, canvas);
        });
    };
    RuntimeExecutionService.prototype.precompile = function (canvas, context) {
        var _this = this;
        if (!this.running)
            return;
        this.worldObjectsService.getObjects().forEach(function (worldObject) {
            _this.gameObjectsService.gameObjects.push(new gameObject_1.GameObject(worldObject, _this.inputService, _this.physicsService, _this.timeService));
        });
    };
    RuntimeExecutionService.prototype.compile = function () {
        var _this = this;
        if (!this.running)
            return;
        this.componentsService.components.forEach(function (component) {
            _this.generateCode(component);
        });
    };
    RuntimeExecutionService.prototype.generateCode = function (component) {
        eval("component['executeCode'] = function(gameObject, keyboard, KEY, physics, timer, gameObjects) {\n            " + component.codeText + "\n            gameObject.update();\n        };");
    };
    RuntimeExecutionService.prototype.setPlayMode = function () {
        this.running = true;
    };
    RuntimeExecutionService.prototype.setEditMode = function () {
        this.running = false;
    };
    RuntimeExecutionService.prototype.isInPlayMode = function () {
        return this.running;
    };
    RuntimeExecutionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [time_1.TimeService, physics_1.PhysicsService, input_1.InputService, components_1.ComponentsService, worldObjects_1.WorldObjectsService, gameObjects_1.GameObjectsService])
    ], RuntimeExecutionService);
    return RuntimeExecutionService;
}());
exports.RuntimeExecutionService = RuntimeExecutionService;
//# sourceMappingURL=runtimeExecution.js.map