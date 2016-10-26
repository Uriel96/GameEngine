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
var sprite_model_1 = require('../models/sprite.model');
var SpritesService = (function () {
    function SpritesService() {
        this.sprites = [];
        this.sprites = [
            new sprite_model_1.Sprite("mario", "http://vignette1.wikia.nocookie.net/mario-fanon/images/3/37/Paper_Mario_Render_1.png/revision/latest?cb=20150214213522&path-prefix=es", 48.1, 60, "mario.applyGravity(this.dt);\n                    if(keyboard.isKeyDown(KEY.RightArrow)){\n                        mario.moveRight(5);\n                    } else if(keyboard.isKeyDown(KEY.LeftArrow)){\n                        mario.moveLeft(5);\n                    }\n                    if(keyboard.isKeyPressed(KEY.UpArrow) && timer < 25){\n                        mario.moveUp(10);\n                        timer++;\n                    }\n                    if(mario.inGround){\n                        timer = 0;   \n                    }"), new sprite_model_1.Sprite("otro", "http://i.stack.imgur.com/OrOS9.png", 54.4, 58, "otro.applyGravity(this.dt);"), new sprite_model_1.Sprite("piso", "https://www.transparenttextures.com/patterns/dark-denim-3.png", 300, 20, "if(piso.isColliding(mario)){ console.log('tocando!!'); }")
        ];
    }
    SpritesService.prototype.getSprites = function () {
        return this.sprites;
    };
    SpritesService.prototype.getSpriteByName = function (spriteName) {
        return this.sprites.find(function (sprite) {
            return sprite.name == spriteName;
        });
    };
    SpritesService.prototype.getSprite = function (index) {
        return this.sprites[index];
    };
    SpritesService.prototype.deleteSprite = function (spriteName) {
        for (var i = 0; i < this.sprites.length; i++) {
            if (this.sprites[i].name == spriteName) {
                this.sprites.splice(i, 1);
                return;
            }
        }
    };
    SpritesService.prototype.getSelectedSprite = function () {
        return this.selectedSprite;
    };
    SpritesService.prototype.setSelectedSprite = function (spriteName) {
        this.selectedSprite = this.sprites.find(function (sprite) {
            return sprite.name == spriteName;
        });
    };
    SpritesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SpritesService);
    return SpritesService;
}());
exports.SpritesService = SpritesService;
//# sourceMappingURL=sprites.service.js.map