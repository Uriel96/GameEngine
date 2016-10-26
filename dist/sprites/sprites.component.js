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
var app_directive_1 = require('../app.directive');
var sprites_service_1 = require('../services/sprites.service');
var SpritesComponent = (function () {
    function SpritesComponent(spritesService) {
        this.spritesService = spritesService;
        this.sprites = this.spritesService.getSprites();
    }
    SpritesComponent.prototype.ngDoCheck = function () {
    };
    SpritesComponent.prototype.ngAfterViewInit = function () {
        /*Drag and Order Sprites*/
        $("#sprites-container").sortable();
        $("#sprites-container").disableSelection();
    };
    SpritesComponent.prototype.setSelectedSprite = function (spriteName) {
        this.spritesService.setSelectedSprite(spriteName);
        this.codeEditor.editor.setValue(this.spritesService.getSelectedSprite().code);
    };
    SpritesComponent.prototype.deleteSprite = function () {
        var selectedSprites = document.getElementsByClassName("list-group-item active");
        if (selectedSprites[0]) {
            var spriteName = selectedSprites[0].id.replace("sprite", "");
            this.spritesService.deleteSprite(spriteName);
        }
    };
    __decorate([
        core_1.ViewChild(app_directive_1.AppDirective), 
        __metadata('design:type', (typeof (_a = typeof app_directive_1.AppDirective !== 'undefined' && app_directive_1.AppDirective) === 'function' && _a) || Object)
    ], SpritesComponent.prototype, "codeEditor", void 0);
    SpritesComponent = __decorate([
        core_1.Component({
            selector: 'sprites-component',
            templateUrl: './app/sprites/sprites.html',
        }), 
        __metadata('design:paramtypes', [sprites_service_1.SpritesService])
    ], SpritesComponent);
    return SpritesComponent;
    var _a;
}());
exports.SpritesComponent = SpritesComponent;
//# sourceMappingURL=sprites.component.js.map