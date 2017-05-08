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
var ActionService = (function () {
    function ActionService() {
    }
    ActionService.prototype.add = function (sprite, action) {
        sprite.actions.push(action);
    };
    ActionService.prototype.get = function (sprite, name) {
        return sprite.actions.find(function (action) { return action.name == name; });
    };
    ActionService.prototype.getAll = function (sprite) {
        return sprite.actions;
    };
    ActionService.prototype.delete = function (sprite, name) {
        for (var i = 0; i < sprite.actions.length; i++) {
            if (sprite.actions[i].name == name) {
                sprite.actions.splice(i, 1);
                return;
            }
        }
    };
    ActionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ActionService);
    return ActionService;
}());
exports.ActionService = ActionService;
//# sourceMappingURL=action.js.map