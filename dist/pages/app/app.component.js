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
var runtimeExecution_1 = require('../../services/runtimeExecution');
var sprites_1 = require('../../services/sprites');
var AppComponent = (function () {
    function AppComponent(runtimeExecutionService, spritesService) {
        this.runtimeExecutionService = runtimeExecutionService;
        this.spritesService = spritesService;
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
    AppComponent.prototype.run = function () {
        if (!this.runtimeExecutionService.isInPlayMode()) {
            $(".game-disablement-content").addClass("game-disabled-content");
            this.runtimeExecutionService.setPlayMode();
        }
    };
    AppComponent.prototype.stop = function () {
        this.runtimeExecutionService.setEditMode();
        $(".game-disablement-content").removeClass("game-disabled-content");
    };
    AppComponent.prototype.step = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: './app/pages/app/app.html',
            styleUrls: ['./app/pages/app/app.style.css']
        }), 
        __metadata('design:paramtypes', [runtimeExecution_1.RuntimeExecutionService, sprites_1.SpritesService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map