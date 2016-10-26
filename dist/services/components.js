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
var component_1 = require('../models/component');
var ComponentsService = (function () {
    function ComponentsService() {
        this.components = [
            new component_1.Component("gameObject.applyGravity();\n                if(keyboard.isKeyDown(KEY.RightArrow)){\n                    gameObject.moveRight(5);\n                } else if(keyboard.isKeyDown(KEY.LeftArrow)){\n                    gameObject.moveLeft(5);\n                }\n                if(keyboard.isKeyDown(KEY.UpArrow) && timer.time == 0){\n                    timer.initializeTimer();\n                }\n                if(timer.time > 0 && timer.time < 200) {\n                    physics.applyForce(gameObject, 4, 90);\n                } else if(gameObject.inGround && keyboard.isKeyUp(KEY.UpArrow)){\n                    timer.clearTimer();\n                }\n                camera.chase(gameObject);\n                /*var objetos = physics.getInRadius(gameObject, 100);\n                if(objetos.length > 0){\n                    console.log(objetos);\n                }\n                if(physics.isInRadius(gameObjects.piso, gameObject, 100, 0, 90)){\n                    console.log(\"este no debe entrar\");\n                }\n                if(physics.isInRadius(gameObjects.piso, gameObject, 300, -50 , 50)){\n                    console.log(\"este si deber\u00EDa entrar\");\n                }*/\n                ")
        ];
    }
    ComponentsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ComponentsService);
    return ComponentsService;
}());
exports.ComponentsService = ComponentsService;
//# sourceMappingURL=components.js.map