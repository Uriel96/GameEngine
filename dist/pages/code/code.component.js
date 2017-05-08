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
var code_directive_1 = require('./code.directive');
var global_1 = require('../../services/global');
var CodeComponent = (function () {
    function CodeComponent(_global) {
        this._global = _global;
    }
    CodeComponent.prototype.ngDoCheck = function () {
        this.changeCode();
    };
    CodeComponent.prototype.changeCode = function () {
        if (this.selectedSprite != this._global.selectedSprite) {
            this.codeEditor.editor.setValue(this._global.selectedSprite.code);
            this.selectedSprite = this._global.selectedSprite;
        }
    };
    __decorate([
        core_1.ViewChild(code_directive_1.CodeDirective), 
        __metadata('design:type', code_directive_1.CodeDirective)
    ], CodeComponent.prototype, "codeEditor", void 0);
    CodeComponent = __decorate([
        core_1.Component({
            selector: 'code-component',
            templateUrl: './app/pages/code/code.html',
        }), 
        __metadata('design:paramtypes', [global_1.GlobalService])
    ], CodeComponent);
    return CodeComponent;
}());
exports.CodeComponent = CodeComponent;
//# sourceMappingURL=code.component.js.map