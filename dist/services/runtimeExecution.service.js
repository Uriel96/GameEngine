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
var game_model_1 = require('../models/game.model');
var gameObjects_service_1 = require('./gameObjects.service');
var components_service_1 = require('./components.service');
var RuntimeExecutionService = (function () {
    function RuntimeExecutionService(componentsService, gameObjectsService) {
        this.componentsService = componentsService;
        this.gameObjectsService = gameObjectsService;
        this.deltaTime = 0;
        this.running = false;
        this.lastUpdate = 0;
    }
    RuntimeExecutionService.prototype.update = function () {
        var _this = this;
        if (!this.running)
            return;
        this.game.setTime();
        this.componentsService.components.forEach(function (component) {
            component.gameObjects.forEach(function (gameObject) {
                component.executeCode(gameObject, _this.game.keyboard, _this.game.KEY, _this.game.physics, _this.game.gameObjects);
            });
        });
    };
    RuntimeExecutionService.prototype.run = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.update();
            _this.render();
        }, 10);
    };
    RuntimeExecutionService.prototype.stop = function () {
        clearInterval(this.timer);
    };
    RuntimeExecutionService.prototype.render = function () {
        var _this = this;
        if (!this.running)
            return;
        this.context.fillStyle = "#FFFFFF";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.gameObjectsService.getObjects().forEach(function (gameObject) {
            gameObject.update();
            gameObject.render(_this.context, _this.canvas);
        });
    };
    RuntimeExecutionService.prototype.precompile = function (canvas, context) {
        if (!this.running)
            return;
        this.canvas = canvas;
        this.context = context;
        this.game = new game_model_1.Game(this.gameObjectsService.getObjects(), this.canvas, this.context);
        /**
         * Setup
         */
    };
    RuntimeExecutionService.prototype.compile = function () {
        var _this = this;
        if (!this.running)
            return;
        this.componentsService.components.forEach(function (component) {
            _this.generateCode(component);
            component.addGame(_this.game);
        });
        this.gameObjectsService.getObjects().forEach(function (gameObject) {
            gameObject.addGame(_this.game);
        });
    };
    RuntimeExecutionService.prototype.generateCode = function (component) {
        eval("component['executeCode'] = function(gameObject, keyboard, KEY, physics, gameObjects) {\n            " + component.codeText + "\n            gameObject.update();\n        };");
    };
    RuntimeExecutionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof components_service_1.ComponentsService !== 'undefined' && components_service_1.ComponentsService) === 'function' && _a) || Object, (typeof (_b = typeof gameObjects_service_1.GameObjectsService !== 'undefined' && gameObjects_service_1.GameObjectsService) === 'function' && _b) || Object])
    ], RuntimeExecutionService);
    return RuntimeExecutionService;
    var _a, _b;
}());
exports.RuntimeExecutionService = RuntimeExecutionService;
//# sourceMappingURL=runtimeExecution.service.js.map