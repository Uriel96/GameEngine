"use strict";
var Component = (function () {
    function Component(codeText, gameObjects) {
        if (codeText === void 0) { codeText = ""; }
        if (gameObjects === void 0) { gameObjects = []; }
        this.codeText = codeText;
        this.gameObjects = gameObjects;
    }
    Component.prototype.addGame = function (game) {
        this.game = game;
    };
    Component.prototype.execute = function (keyboard, KEY) {
        var _this = this;
        this.gameObjects.forEach(function (gameObject) {
            _this.executeCode(gameObject, keyboard, KEY);
        });
    };
    Component.prototype.add = function (gameObject) {
        this.gameObjects.push(gameObject);
    };
    return Component;
}());
exports.Component = Component;
//# sourceMappingURL=component.model.js.map