"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var object_1 = require('./object');
var GameObject = (function (_super) {
    __extends(GameObject, _super);
    function GameObject(worldObject, inputService, physicsService, timeService) {
        _super.call(this, worldObject.x, worldObject.y, worldObject.sprite.width, worldObject.sprite.height);
        this.worldObject = worldObject;
        this.inputService = inputService;
        this.physicsService = physicsService;
        this.timeService = timeService;
        this.velocityY = 0;
        this.velocityX = 0;
        this.components = [];
        this.sprite = worldObject.sprite;
        this._friction = 0.8;
        this._inGround = false;
        this._hasGravity = false;
        this.components = worldObject.components;
        this.mass = 20;
        this.image = new Image(this.x, this.y);
        this.image.src = this.sprite.src;
    }
    Object.defineProperty(GameObject.prototype, "friction", {
        get: function () { return this._friction; },
        set: function (newFriction) {
            if (newFriction < 0 || newFriction > 1) {
                throw new RangeError("");
            }
            this._friction = newFriction;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "inGround", {
        get: function () { return this._inGround; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "hasGravity", {
        get: function () { return this._hasGravity; },
        enumerable: true,
        configurable: true
    });
    GameObject.prototype.moveRight = function (speed) {
        if (this.velocityX < speed) {
            this.velocityX++;
        }
    };
    GameObject.prototype.moveLeft = function (speed) {
        if (this.velocityX > -speed) {
            this.velocityX--;
        }
    };
    GameObject.prototype.moveUp = function (speed) {
        if (this.velocityY > speed) {
            this.velocityY--;
        }
    };
    GameObject.prototype.moveDown = function (speed) {
        if (this.velocityY < speed) {
            this.velocityY++;
        }
    };
    GameObject.prototype.isColliding = function (otherObject) {
        var otherX2 = otherObject.x + otherObject.width;
        var otherY2 = otherObject.y + otherObject.height;
        var thisX2 = this.x + this.width;
        var thisY2 = this.y + this.height;
        if (thisX2 > otherObject.x && otherX2 > this.x) {
            if (thisY2 > otherObject.y && otherY2 > this.y) {
                return true;
            }
        }
        return false;
    };
    GameObject.prototype.applyGravity = function (gravity) {
        if (gravity === void 0) { gravity = 9.8; }
        this.physicsService.applyGravity(this, gravity);
    };
    GameObject.prototype.update = function () {
        if (!this._hasGravity) {
            this.velocityY *= this._friction;
            this.y += this.velocityY * this.timeService.deltaTime / 10;
        }
        this.velocityX *= this._friction;
        this.x += this.velocityX * this.timeService.deltaTime / 10;
    };
    GameObject.prototype.render = function (cameraService, ctx, canvas) {
        ctx.drawImage(this.image, this.x - cameraService.realPositionX, this.y - cameraService.realPositionY, this.sprite.width, this.sprite.height);
    };
    return GameObject;
}(object_1.Object));
exports.GameObject = GameObject;
//# sourceMappingURL=gameObject.js.map