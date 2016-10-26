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
var time_1 = require('./time');
var gameObjects_1 = require('../gameObjects');
var PhysicsService = (function () {
    function PhysicsService(timeService, gameObjectsService) {
        this.timeService = timeService;
        this.gameObjectsService = gameObjectsService;
        this.gravity = 9.8;
        this.friction = 0.8;
    }
    PhysicsService.prototype.applyForce = function (gameObject, force, angle) {
        if (angle === void 0) { angle = 0; }
        if (gameObject.mass) {
            var forceMagnitud = force * this.timeService.deltaTime * this.timeService.deltaTime / (2 * gameObject.mass);
            gameObject.x += Math.cos(this.toRadians(angle)) * forceMagnitud;
            gameObject.y -= Math.sin(this.toRadians(angle)) * forceMagnitud;
        }
    };
    PhysicsService.prototype.applyGravity = function (gameObject, gravity) {
        var _this = this;
        var newPosition = gameObject.y + (gravity * this.timeService.deltaTime * this.timeService.deltaTime / 200);
        var colliding = false;
        this.gameObjectsService.gameObjects.forEach(function (go2) {
            if (_this.isColliding(gameObject, go2, -1, newPosition)) {
                colliding = true;
            }
        });
        if (!(gameObject._inGround = colliding)) {
            gameObject.y = newPosition;
        }
    };
    PhysicsService.prototype.getInRadius = function (go1, radius, initialAngle, finalAngle) {
        if (initialAngle === void 0) { initialAngle = 0; }
        if (finalAngle === void 0) { finalAngle = 360; }
        var newGameObjects = [];
        /*this.gameObjectsService.gameObjects.forEach(go2 => {
            if(go2 != go1 && this.getDistance(go1, go2) <= radius) {
                newGameObjects.push(go2);
            }
        });*/
        return newGameObjects;
    };
    PhysicsService.prototype.isInRadius = function (go1, go2, radius, initialAngle, finalAngle) {
        if (initialAngle === void 0) { initialAngle = 0; }
        if (finalAngle === void 0) { finalAngle = 360; }
        if (initialAngle < 0) {
            finalAngle += 360;
        }
        if (finalAngle < 0) {
            finalAngle += 360;
        }
        if (finalAngle < initialAngle) {
            finalAngle += 360;
        }
        if (finalAngle > 360) {
            finalAngle -= 360;
            initialAngle -= 360;
        }
        var distance = this.getDistance(go1, go2);
        var angle = this.toDegrees(this.getAngle(go1, go2));
        /*context.beginPath();
        context.arc(go1.x, go2.y, radius, this.toRadians(initialAngle), this.toRadians(finalAngle), false);
        context.closePath();
        context.lineWidth = 5;
        context.fillStyle = 'red';
        context.fill();
        context.strokeStyle = '#550000';
        context.stroke();*/
        return distance <= radius && angle >= initialAngle && angle <= finalAngle;
    };
    PhysicsService.prototype.isColliding = function (go1, go2, newPosX, newPosY) {
        if (newPosX === void 0) { newPosX = -1; }
        if (newPosY === void 0) { newPosY = -1; }
        if (go1 == go2)
            return false;
        if (newPosX == -1) {
            newPosX = go1.x;
        }
        if (newPosY == -1) {
            newPosY = go1.y;
        }
        var otherX2 = go2.x + go2.width;
        var otherY2 = go2.y + go2.height;
        var thisX2 = newPosX + go1.width;
        var thisY2 = newPosY + go1.height;
        if (thisX2 > go2.x && otherX2 > newPosX) {
            if (thisY2 > go2.y && otherY2 > newPosY) {
                return true;
            }
        }
        return false;
    };
    PhysicsService.prototype.toDegrees = function (angle) {
        var newAngle = angle * (180 / Math.PI);
        if (newAngle < 0) {
            newAngle = newAngle + 360;
        }
        return newAngle;
    };
    PhysicsService.prototype.toRadians = function (angle) {
        return angle * (Math.PI / 180);
    };
    PhysicsService.prototype.getDistance = function (go1, go2) {
        var deltaX = go2.x - go1.x;
        var deltaY = go2.y - go1.y;
        return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    };
    PhysicsService.prototype.getAngle = function (go1, go2) {
        var deltaX = go2.x - go1.x;
        var deltaY = go1.y - go2.y;
        return Math.atan2(deltaY, deltaX);
    };
    PhysicsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [time_1.TimeService, gameObjects_1.GameObjectsService])
    ], PhysicsService);
    return PhysicsService;
}());
exports.PhysicsService = PhysicsService;
//# sourceMappingURL=physics.js.map