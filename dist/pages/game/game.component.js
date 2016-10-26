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
var game_directive_1 = require('./game.directive');
var sprites_1 = require('../../services/sprites');
var worldObjects_1 = require('../../services/worldObjects');
var runtimeExecution_1 = require('../../services/runtimeExecution');
var GameComponent = (function () {
    function GameComponent(spritesService, objectsService, runtimeExecutionService) {
        this.spritesService = spritesService;
        this.objectsService = objectsService;
        this.runtimeExecutionService = runtimeExecutionService;
        this.first = false;
    }
    GameComponent.prototype.ngDoCheck = function () {
        if (this.runtimeExecutionService.isInPlayMode() && !this.first) {
            this.runtimeExecutionService.precompile(this.game.canvas, this.game.context);
            this.runtimeExecutionService.compile();
            this.runtimeExecutionService.run(this.game.canvas, this.game.context);
            this.first = true;
        }
        if (!this.runtimeExecutionService.isInPlayMode()) {
            this.runtimeExecutionService.stop();
            this.first = false;
        }
    };
    __decorate([
        core_1.ViewChild(game_directive_1.GameDirective), 
        __metadata('design:type', game_directive_1.GameDirective)
    ], GameComponent.prototype, "game", void 0);
    GameComponent = __decorate([
        core_1.Component({
            selector: 'game-component',
            templateUrl: './app/pages/game/game.html',
        }), 
        __metadata('design:paramtypes', [sprites_1.SpritesService, worldObjects_1.WorldObjectsService, runtimeExecution_1.RuntimeExecutionService])
    ], GameComponent);
    return GameComponent;
}());
exports.GameComponent = GameComponent;
//# sourceMappingURL=game.component.js.map