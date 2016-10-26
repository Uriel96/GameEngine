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
var app_directive_1 = require('./app.directive');
var game_component_1 = require('../game/game.component');
var game_directive_1 = require('../game/game.directive');
var world_component_1 = require('../world/world.component');
var world_directive_1 = require('../world/world.directive');
var code_component_1 = require('../code/code.component');
var code_directive_1 = require('../code/code.directive');
var sprites_component_1 = require('../sprites/sprites.component');
var sprite_directive_1 = require('../sprites/sprite.directive');
var createSprite_component_1 = require('../createSprite/createSprite.component');
var resizeSprite_component_1 = require('../resizeSprite/resizeSprite.component');
var createSpriteSheet_component_1 = require('../createSpriteSheet/createSpriteSheet.component');
var showAction_component_1 = require('../showAction/showAction.component');
var app_1 = require('../../services/app');
var runtimeExecution_1 = require('../../services/runtimeExecution');
var components_1 = require('../../services/components');
var sprites_1 = require('../../services/sprites');
var worldObjects_1 = require('../../services/worldObjects');
var input_1 = require('../../services/configuration/input');
var game_1 = require('../../services/game');
var time_1 = require('../../services/configuration/time');
var physics_1 = require('../../services/configuration/physics');
var gameObjects_1 = require('../../services/gameObjects');
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
                game_component_1.GameComponent,
                game_directive_1.GameDirective,
                world_component_1.WorldComponent,
                world_directive_1.WorldDirective,
                code_component_1.CodeComponent,
                code_directive_1.CodeDirective,
                sprites_component_1.SpritesComponent,
                sprite_directive_1.SpriteDirective,
                createSprite_component_1.CreateSpriteComponent,
                resizeSprite_component_1.ResizeSpriteComponent,
                createSpriteSheet_component_1.CreateSpriteSheetComponent,
                showAction_component_1.ShowActionComponent
            ],
            providers: [
                app_1.AppService,
                runtimeExecution_1.RuntimeExecutionService,
                components_1.ComponentsService,
                sprites_1.SpritesService,
                worldObjects_1.WorldObjectsService,
                input_1.InputService,
                time_1.TimeService,
                physics_1.PhysicsService,
                game_1.GameService,
                gameObjects_1.GameObjectsService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map