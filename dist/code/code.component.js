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
var sprites_service_1 = require('../services/sprites.service');
var gameObjects_service_1 = require('../services/gameObjects.service');
var CodeComponent = (function () {
    function CodeComponent(spritesService, objectsService) {
        this.spritesService = spritesService;
        this.objectsService = objectsService;
        this.inPlayMode = false;
        this.dt = 0;
        this.lastUpdate = 0;
    }
    CodeComponent.prototype.run = function () {
        if (!this.inPlayMode)
            this.inPlayMode = true;
        else
            return;
        //PreCompilation
        var conf = this.doPreCompile();
        var KEY = conf.KEY;
        var keyboard = conf.keyboard;
        //Compile
        var newCode = "";
        for (var i = 0; i < this.spritesService.getSprites().length; i++) {
            var spriteName = this.spritesService.getSprite(i).name;
            newCode += "var " + spriteName + " = this.objectsService.getObjectsByName(" + spriteName + ");\n";
            newCode += "if(" + spriteName + "){ " + spriteName + " = " + spriteName + "[0]; }";
        }
        this.lastUpdate = Date.now();
        newCode += "\n            var timer = 0;\n            this.timer = setInterval(() => {\n                var now = Date.now();\n                this.dt = now - this.lastUpdate;\n                if(this.lastUpdate <= 0){\n                    this.dt = 0;\n                }\n                this.lastUpdate = now;\n                " + this.getCode() + "\n                this.render();\n            }, 10);\n        ";
        //Run Compilation
        eval(newCode);
    };
    CodeComponent.prototype.doPreCompile = function () {
        var configuration = {};
        configuration.keys = [];
        document.onkeyup = function (e) {
            configuration.keys[e.keyCode] = 0;
        };
        document.onkeydown = function (e) {
            if (configuration.keys[e.keyCode] == 0) {
                configuration.keys[e.keyCode] = 1;
            }
            else if (configuration.keys[e.keyCode] == 1) {
                configuration.keys[e.keyCode] = 2;
            }
        };
        configuration.KEY = { UpArrow: 38, DownArrow: 40, LeftArrow: 37, RightArrow: 39 };
        configuration.keyboard = {
            isKeyDown: function (key) {
                return configuration.keys[key] == 1 || configuration.keys[key] == 2;
            },
            isKeyUp: function (key) {
                return configuration.keys[key] == 0;
            },
            isKeyPressed: function (key) {
                return configuration.keys[key] == 1;
            }
        };
        return configuration;
    };
    CodeComponent.prototype.getCode = function () {
        var code = "";
        for (var i = 0; i < this.spritesService.getSprites().length; i++) {
            code += "if(" + this.spritesService.getSprite(i).name + "){\n                " + this.spritesService.getSprite(i).code + "\n            }\n            ";
        }
        return code;
    };
    CodeComponent.prototype.render = function () {
        for (var i = 0; i < this.objectsService.getObjects().length; i++) {
        }
    };
    CodeComponent.prototype.stopGame = function () {
        this.inPlayMode = false;
        clearInterval(this.timer);
    };
    CodeComponent = __decorate([
        core_1.Component({
            selector: 'code-component',
            templateUrl: './app/code/code.html',
        }), 
        __metadata('design:paramtypes', [sprites_service_1.SpritesService, gameObjects_service_1.GameObjectsService])
    ], CodeComponent);
    return CodeComponent;
}());
exports.CodeComponent = CodeComponent;
//# sourceMappingURL=code.component.js.map