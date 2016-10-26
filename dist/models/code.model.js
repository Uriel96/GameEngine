"use strict";
var Code = (function () {
    function Code() {
    }
    Code.prototype.execute = function () {
        for (var i = 0; i < this.gameObjects.length; i++) {
            this.executeCode(this.gameObjects[i]);
        }
    };
    Code.prototype.add = function (gameObject) {
        this.gameObjects.push(gameObject);
    };
    return Code;
}());
exports.Code = Code;
//# sourceMappingURL=code.model.js.map