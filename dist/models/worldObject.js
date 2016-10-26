"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var object_1 = require('./object');
var WorldObject = (function (_super) {
    __extends(WorldObject, _super);
    function WorldObject(sprite, positionX, positionY) {
        if (positionX === void 0) { positionX = 0; }
        if (positionY === void 0) { positionY = 0; }
        _super.call(this, positionX, positionY, sprite.width, sprite.height);
        this.components = [];
        this.sprite = sprite;
        this.x = positionX;
        this.y = positionY;
        this.image = new Image(this.x, this.y);
        this.image.src = this.sprite.src;
    }
    WorldObject.prototype.render = function (ctx, canvas) {
        ctx.drawImage(this.image, this.x, this.y, this.sprite.width, this.sprite.height);
    };
    return WorldObject;
}(object_1.Object));
exports.WorldObject = WorldObject;
//# sourceMappingURL=worldObject.js.map