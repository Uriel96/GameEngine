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
var sprites_1 = require('../../../services/sprites');
var CreateSpriteComponent = (function () {
    function CreateSpriteComponent(_sprites) {
        this._sprites = _sprites;
    }
    CreateSpriteComponent.prototype.ngAfterViewInit = function () {
    };
    CreateSpriteComponent.prototype.ngOnInit = function () {
        if (!this.sprite) {
            this.sprite = {
                name: "",
                src: "",
                width: 0,
                height: 0,
                code: ""
            };
        }
    };
    /**
     * Creates a new Sprite Based on the options the user used.
     */
    CreateSpriteComponent.prototype.createSprite = function () {
        //Set the size of the Sprite to the size of the image.
        if (!this.sprite.width) {
            this.sprite.width = $('#resize-image').get(0).naturalWidth;
        }
        if (!this.sprite.height) {
            this.sprite.height = $('#resize-image').get(0).naturalHeight;
        }
        //Adds a new sprite
        this._sprites.createSprite(this.sprite);
        this.close();
    };
    /**
     * Closes the Sprite Modal Window.
     */
    CreateSpriteComponent.prototype.close = function () {
        $('#create-sprite-modal').modal('hide');
    };
    /**
     * Resizes the image.
     */
    CreateSpriteComponent.prototype.changeDimensions = function () {
        $('#resize-image-container').width($('#resize-image').get(0).naturalWidth);
        $('#resize-image-container').height($('#resize-image').get(0).naturalHeight);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CreateSpriteComponent.prototype, "sprite", void 0);
    CreateSpriteComponent = __decorate([
        core_1.Component({
            selector: 'create-sprite-modal',
            templateUrl: './app/pages/sprites/createSprite/createSprite.html'
        }), 
        __metadata('design:paramtypes', [sprites_1.SpritesService])
    ], CreateSpriteComponent);
    return CreateSpriteComponent;
}());
exports.CreateSpriteComponent = CreateSpriteComponent;
//# sourceMappingURL=createSprite.component.js.map