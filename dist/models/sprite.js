"use strict";
var Sprite = (function () {
    function Sprite(name, src, width, height, code) {
        if (src === void 0) { src = ""; }
        if (width === void 0) { width = 200; }
        if (height === void 0) { height = 200; }
        if (code === void 0) { code = ""; }
        this.name = name;
        this.src = src;
        this.width = width;
        this.height = height;
        this.code = code;
    }
    return Sprite;
}());
exports.Sprite = Sprite;
//# sourceMappingURL=sprite.js.map