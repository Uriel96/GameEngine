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
var app_1 = require('../services/app');
var runtimeExecution_1 = require('../services/runtimeExecution');
var sprites_1 = require('../services/sprites');
var gameObjects_1 = require('../services/gameObjects');
var AppComponent = (function () {
    function AppComponent(appService, runtimeExecutionService, spritesService, objectsService) {
        this.appService = appService;
        this.runtimeExecutionService = runtimeExecutionService;
        this.spritesService = spritesService;
        this.objectsService = objectsService;
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        /*Resize Panels*/
        $(".panel-left").resizable({
            handles: "e"
        });
        $(".panel-center").resizable({
            handles: "e"
        });
        $(".panel-top").resizable({
            handles: "n, s"
        });
    };
    AppComponent.prototype.ngDoCheck = function () {
    };
    AppComponent.prototype.start = function () {
        if (!this.appService.isInPlayMode()) {
            $(".game-disablement-content").addClass("game-disabled-content");
            this.runtimeExecutionService.running = true;
            this.runtimeExecutionService.precompile();
            this.runtimeExecutionService.compile();
            this.appService.setPlayMode();
        }
    };
    AppComponent.prototype.stop = function () {
        this.appService.setEditMode();
        this.runtimeExecutionService.running = false;
        $(".game-disablement-content").removeClass("game-disabled-content");
    };
    AppComponent.prototype.step = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: './app/app/app.html',
            styleUrls: ['./app/app/app.style.css']
        }), 
        __metadata('design:paramtypes', [app_1.AppService, runtimeExecution_1.RuntimeExecutionService, sprites_1.SpritesService, gameObjects_1.GameObjectsService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map