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
var action_1 = require('../../../services/action');
var CreateSpriteSheetComponent = (function () {
    function CreateSpriteSheetComponent(_actions) {
        this._actions = _actions;
        this.startAnimation = false;
        this.newAction = {
            name: ""
        };
    }
    CreateSpriteSheetComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        //Get Original Dimensions form Image
        var originalHeight = $('#sprite-sheet').naturalHeight;
        var originalWidth = $('#sprite-sheet').naturalWidth;
        //Make Image Selectable
        $('#sprite-sheet').imgAreaSelect({
            aspectRatio: '0:1',
            handles: true,
            fadeSpeed: 200,
            imageHeight: originalHeight,
            imageWidth: originalWidth,
            onSelectEnd: function (img, selection) {
                if (!selection.width || !selection.height) {
                    return;
                }
                //Retrieve dimensions from the selection
                var porcX = img.naturalWidth / img.width;
                var porcY = img.naturalHeight / img.height;
                _this.selectedAction.resizedx1 = selection.x1;
                _this.selectedAction.resizedy1 = selection.y1;
                _this.selectedAction.resizedx2 = selection.x2;
                _this.selectedAction.resizedy2 = selection.y2;
                _this.selectedAction.x1 = Math.round(selection.x1 * porcX);
                _this.selectedAction.y1 = Math.round(selection.y1 * porcY);
                _this.selectedAction.x2 = Math.round(selection.x2 * porcX);
                _this.selectedAction.y2 = Math.round(selection.y2 * porcY);
                _this.updateGrid();
            }
        });
    };
    CreateSpriteSheetComponent.prototype.updateGrid = function () {
        var posX = this.selectedAction.resizedx1 + $('#sprite-sheet').position().left;
        var posY = this.selectedAction.resizedy1 + $('#sprite-sheet').position().top;
        var width = this.selectedAction.resizedx2 - this.selectedAction.resizedx1;
        var height = this.selectedAction.resizedy2 - this.selectedAction.resizedy1;
        $('.box').remove();
        for (var i = 0; i < this.selectedAction.numCol; i++) {
            for (var j = 0; j < this.selectedAction.numRow; j++) {
                var w = width / this.selectedAction.numCol;
                var h = height / this.selectedAction.numRow;
                var pX = posX + (i * w);
                var pY = posY + (j * h);
                $('#sprite-sheet').parent().append('<div class="box" style="top:' + pY + ';left: ' + pX + ';width:' + w + 'px;height:' + h + 'px;"></div>');
            }
        }
    };
    CreateSpriteSheetComponent.prototype.changeAction = function (name) {
        this.selectedAction = this._actions.get(this.sprite, name);
        if (this.selectedAction) {
            var spriteSheet = $('#sprite-sheet').imgAreaSelect({
                instance: true
            });
            spriteSheet.setSelection(this.selectedAction.resizedx1, this.selectedAction.resizedy1, this.selectedAction.resizedx2, this.selectedAction.resizedy2, true);
            spriteSheet.setOptions({ show: true });
            spriteSheet.update();
        }
    };
    CreateSpriteSheetComponent.prototype.deleteAction = function (actionName) {
        this._actions.delete(this.sprite, actionName);
    };
    CreateSpriteSheetComponent.prototype.addAction = function () {
        this._actions.add(this.sprite, this.newAction);
    };
    CreateSpriteSheetComponent.prototype.showAnimation = function () {
        var width = (this.selectedAction.x2 - this.selectedAction.x1) / this.selectedAction.numCol;
        var height = (this.selectedAction.y2 - this.selectedAction.y1) / this.selectedAction.numRow;
        $('.crop').css('width', width);
        $('.crop').css('height', height);
        var i = 0;
        this.startAnimation = true;
        function playAnimation() {
            var _this = this;
            setTimeout(function () {
                var posY = -_this.action.y1;
                var posX = -_this.action.x1 - (i * width);
                $('#previewImage').css('margin', posY + 'px 0 0 ' + posX + 'px');
                i++;
                if (i >= _this.action.numCol) {
                    i = 0;
                }
                if (_this.startAnimation) {
                    playAnimation.call(_this);
                }
            }, 1000 / this.action.speed);
        }
        ;
        playAnimation.call(this);
    };
    CreateSpriteSheetComponent.prototype.createSpriteSheet = function () {
        this.close();
    };
    CreateSpriteSheetComponent.prototype.close = function () {
        $('#create-sprite-sheet-modal').modal('hide');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CreateSpriteSheetComponent.prototype, "sprite", void 0);
    CreateSpriteSheetComponent = __decorate([
        core_1.Component({
            selector: 'create-sprite-sheet-modal',
            templateUrl: './app/pages/sprites/createSpriteSheet/createSpriteSheet.html'
        }), 
        __metadata('design:paramtypes', [action_1.ActionService])
    ], CreateSpriteSheetComponent);
    return CreateSpriteSheetComponent;
}());
exports.CreateSpriteSheetComponent = CreateSpriteSheetComponent;
//# sourceMappingURL=createSpriteSheet.component.js.map