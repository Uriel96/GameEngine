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
(function (KEY) {
    KEY[KEY["UpArrow"] = 38] = "UpArrow";
    KEY[KEY["DownArrow"] = 40] = "DownArrow";
    KEY[KEY["LeftArrow"] = 37] = "LeftArrow";
    KEY[KEY["RightArrow"] = 39] = "RightArrow";
})(exports.KEY || (exports.KEY = {}));
var KEY = exports.KEY;
var InputService = (function () {
    function InputService() {
        this.keys = [];
    }
    InputService.prototype.isKeyDown = function (key) {
        return this.keys[key] == 1 || this.keys[key] == 2;
    };
    InputService.prototype.isKeyUp = function (key) {
        return this.keys[key] == 0;
    };
    InputService.prototype.isKeyPressed = function (key) {
        return this.keys[key] == 1;
    };
    InputService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], InputService);
    return InputService;
}());
exports.InputService = InputService;
//# sourceMappingURL=input.js.map