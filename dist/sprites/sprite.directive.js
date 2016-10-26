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
var SpriteDirective = (function () {
    function SpriteDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.selectedSpriteChanged = new core_1.EventEmitter();
        this.sprite = this.element.nativeElement;
    }
    /*Select an Sprite*/
    SpriteDirective.prototype.onClick = function (event) {
        event.preventDefault();
        $(this.sprite).parent().find('li').removeClass('active');
        $(this.sprite).addClass('active');
        this.selectedSpriteChanged.emit(this.sprite.id.replace("sprite", ""));
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SpriteDirective.prototype, "selectedSpriteChanged", void 0);
    __decorate([
        core_1.HostListener('click', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [MouseEvent]), 
        __metadata('design:returntype', void 0)
    ], SpriteDirective.prototype, "onClick", null);
    SpriteDirective = __decorate([
        core_1.Directive({
            selector: '[sprite]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], SpriteDirective);
    return SpriteDirective;
}());
exports.SpriteDirective = SpriteDirective;
//# sourceMappingURL=sprite.directive.js.map