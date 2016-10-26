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
var CreateSpriteSheetComponent = (function () {
    function CreateSpriteSheetComponent() {
        this.startAnimation = false;
        this.actions = [];
        this.action = {
            name: "",
        };
    }
    CreateSpriteSheetComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        /*Select Action of Sprite Sheet*/
        var originalHeight = $('#sprite-sheet').naturalHeight;
        var originalWidth = $('#sprite-sheet').naturalWidth;
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
                var porcX = img.naturalWidth / img.width;
                var porcY = img.naturalHeight / img.height;
                _this.action.resizedx1 = selection.x1;
                _this.action.resizedy1 = selection.y1;
                _this.action.resizedx2 = selection.x2;
                _this.action.resizedy2 = selection.y2;
                _this.action.x1 = Math.round(selection.x1 * porcX);
                _this.action.y1 = Math.round(selection.y1 * porcY);
                _this.action.x2 = Math.round(selection.x2 * porcX);
                _this.action.y2 = Math.round(selection.y2 * porcY);
                _this.updateGrid();
            }
        });
    };
    CreateSpriteSheetComponent.prototype.updateGrid = function () {
        var posX = this.action.resizedx1 + $('#sprite-sheet').position().left;
        var posY = this.action.resizedy1 + $('#sprite-sheet').position().top;
        var width = this.action.resizedx2 - this.action.resizedx1;
        var height = this.action.resizedy2 - this.action.resizedy1;
        $('.box').remove();
        for (var i = 0; i < this.action.numCol; i++) {
            for (var j = 0; j < this.action.numRow; j++) {
                var w = width / this.action.numCol;
                var h = height / this.action.numRow;
                var pX = posX + (i * w);
                var pY = posY + (j * h);
                $('#sprite-sheet').parent().append('<div class="box" style="top:' + pY + ';left: ' + pX + ';width:' + w + 'px;height:' + h + 'px;"></div>');
            }
        }
    };
    CreateSpriteSheetComponent.prototype.addAction = function () {
        this.actions.push({
            name: this.newActionName
        });
        this.changeAction(this.newActionName);
        this.newActionName = '';
    };
    CreateSpriteSheetComponent.prototype.getAction = function (actionName) {
        return this.actions.find(function (anAction) {
            return anAction.name == actionName;
        });
    };
    CreateSpriteSheetComponent.prototype.changeAction = function (actionName) {
        this.action = this.getAction(actionName);
        if (this.action) {
            var spriteSheet = $('#sprite-sheet').imgAreaSelect({
                instance: true
            });
            spriteSheet.setSelection(this.action.resizedx1, this.action.resizedy1, this.action.resizedx2, this.action.resizedy2, true);
            spriteSheet.setOptions({ show: true });
            spriteSheet.update();
        }
    };
    CreateSpriteSheetComponent.prototype.deleteAction = function (actionName) {
        for (var i = 0; i < this.actions.length; i++) {
            if (this.actions[i].name == actionName) {
                this.actions.splice(i, 1);
                return;
            }
        }
    };
    CreateSpriteSheetComponent.prototype.showAnimation = function () {
        var width = (this.action.x2 - this.action.x1) / this.action.numCol;
        var height = (this.action.y2 - this.action.y1) / this.action.numRow;
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
            templateUrl: './app/createSpriteSheet/createSpriteSheet.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CreateSpriteSheetComponent);
    return CreateSpriteSheetComponent;
}());
exports.CreateSpriteSheetComponent = CreateSpriteSheetComponent;
//# sourceMappingURL=createSpriteSheet.component.js.map