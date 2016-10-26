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
var ShowActionComponent = (function () {
    function ShowActionComponent() {
        this.startAnimation = false;
    }
    ShowActionComponent.prototype.ngAfterViewInit = function () {
    };
    ShowActionComponent.prototype.close = function () {
        this.startAnimation = false;
        $('#show-action-modal').modal('hide');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ShowActionComponent.prototype, "action", void 0);
    ShowActionComponent = __decorate([
        core_1.Component({
            selector: 'show-action-modal',
            templateUrl: './app/pages/showAction/showAction.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ShowActionComponent);
    return ShowActionComponent;
}());
exports.ShowActionComponent = ShowActionComponent;
//# sourceMappingURL=showAction.component.js.map