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
var input_1 = require('../../services/configuration/input');
var AppDirective = (function () {
    function AppDirective(element, renderer, inputService) {
        this.element = element;
        this.renderer = renderer;
        this.inputService = inputService;
    }
    AppDirective.prototype.onKeyUp = function (event) {
        this.inputService.keys[event.keyCode] = 0;
    };
    AppDirective.prototype.onKeyDown = function (event) {
        if (this.inputService.keys[event.keyCode] == 0 || !this.inputService.keys[event.keyCode]) {
            this.inputService.keys[event.keyCode] = 1;
        }
        else if (this.inputService.keys[event.keyCode] == 1) {
            this.inputService.keys[event.keyCode] = 2;
        }
    };
    __decorate([
        core_1.HostListener('keyup', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [KeyboardEvent]), 
        __metadata('design:returntype', void 0)
    ], AppDirective.prototype, "onKeyUp", null);
    __decorate([
        core_1.HostListener('keydown', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [KeyboardEvent]), 
        __metadata('design:returntype', void 0)
    ], AppDirective.prototype, "onKeyDown", null);
    AppDirective = __decorate([
        core_1.Directive({
            selector: '[main]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, input_1.InputService])
    ], AppDirective);
    return AppDirective;
}());
exports.AppDirective = AppDirective;
//# sourceMappingURL=app.directive.js.map