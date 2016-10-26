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
var WorldDirective = (function () {
    function WorldDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.startX = 0;
        this.startY = 0;
        this.inDrag = false;
        this.mousePressed = false;
        this.canvas = element.nativeElement;
        this.context = this.canvas.getContext("2d");
    }
    WorldDirective.prototype.onMouseMove = function (event) {
        this.mouseX = event.offsetX;
        this.mouseY = event.offsetY;
    };
    WorldDirective.prototype.onMouseDown = function () {
        this.mousePressed = true;
    };
    WorldDirective.prototype.onMouseUp = function () {
        this.mousePressed = false;
        this.dragging = undefined;
    };
    WorldDirective.prototype.drag = function (object) {
        if (this.mousePressed && (!this.dragging || this.dragging == object)) {
            var left = object.x;
            var right = object.x + object.sprite.width;
            var top = object.y;
            var bottom = object.y + object.sprite.height;
            if (!this.inDrag) {
                this.startX = this.mouseX - object.x;
                this.startY = this.mouseY - object.y;
            }
            if (this.mouseX < right && this.mouseX > left && this.mouseY < bottom && this.mouseY > top) {
                this.dragging = object;
                this.inDrag = true;
            }
        }
        else {
            this.inDrag = false;
        }
        if (this.inDrag) {
            object.x = this.mouseX - this.startX;
            object.y = this.mouseY - this.startY;
        }
    };
    __decorate([
        core_1.HostListener('mousemove', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], WorldDirective.prototype, "onMouseMove", null);
    __decorate([
        core_1.HostListener('mousedown'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], WorldDirective.prototype, "onMouseDown", null);
    __decorate([
        core_1.HostListener('mouseup'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], WorldDirective.prototype, "onMouseUp", null);
    WorldDirective = __decorate([
        core_1.Directive({
            selector: '[world]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], WorldDirective);
    return WorldDirective;
}());
exports.WorldDirective = WorldDirective;
//# sourceMappingURL=world.directive.js.map