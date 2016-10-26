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
var ResizeSpriteComponent = (function () {
    function ResizeSpriteComponent() {
        if (this.sprite) {
            if (!this.sprite.width) {
                this.sprite.width = $('#resize-image').get(0).naturalWidth;
            }
            if (!this.sprite.height) {
                this.sprite.height = $('#resize-image').get(0).naturalHeight;
            }
        }
    }
    ResizeSpriteComponent.prototype.ngAfterViewInit = function () {
        /*Resize Image*/
        $('#resize-image-container').resizable({
            minHeight: 50,
            minWidth: 50,
            width: this.sprite.width,
            height: this.sprite.height,
            aspectRatio: true
        });
    };
    ResizeSpriteComponent.prototype.resize = function () {
        this.sprite.width = $('#resize-image').width();
        this.sprite.height = $('#resize-image').height();
        this.close();
    };
    ResizeSpriteComponent.prototype.close = function () {
        $('#resize-sprite-modal').modal('hide');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ResizeSpriteComponent.prototype, "sprite", void 0);
    ResizeSpriteComponent = __decorate([
        core_1.Component({
            selector: 'resize-sprite-modal',
            templateUrl: './app/pages/resizeSprite/resizeSprite.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ResizeSpriteComponent);
    return ResizeSpriteComponent;
}());
exports.ResizeSpriteComponent = ResizeSpriteComponent;
//# sourceMappingURL=resizeSprite.component.js.map