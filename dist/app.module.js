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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var createSprite_component_1 = require('./createSprite/createSprite.component');
var resizeSprite_component_1 = require('./resizeSprite/resizeSprite.component');
var createSpriteSheet_component_1 = require('./createSpriteSheet/createSpriteSheet.component');
var showAction_component_1 = require('./showAction/showAction.component');
var app_pipe_1 = require('./app.pipe');
var app_directive_1 = require('./app.directive');
var sprites_component_1 = require('./sprites/sprites.component');
var sprite_directive_1 = require('./sprites/sprite.directive');
var world_component_1 = require('./world/world.component');
var world_directive_1 = require('./world/world.directive');
var code_component_1 = require('./code/code.component');
var code_directive_1 = require('./code/code.directive');
var sprites_service_1 = require('./services/sprites.service');
var gameObjects_service_1 = require('./services/gameObjects.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                app_directive_1.AppDirective,
                world_component_1.WorldComponent,
                world_directive_1.WorldDirective,
                code_component_1.CodeComponent,
                code_directive_1.CodeDirective,
                sprites_component_1.SpritesComponent,
                sprite_directive_1.SpriteDirective,
                createSprite_component_1.CreateSpriteComponent,
                resizeSprite_component_1.ResizeSpriteComponent,
                createSpriteSheet_component_1.CreateSpriteSheetComponent,
                showAction_component_1.ShowActionComponent,
                app_pipe_1.KeysPipe
            ],
            providers: [
                sprites_service_1.SpritesService,
                gameObjects_service_1.GameObjectsService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map