"use strict";
var Game = (function () {
    function Game(gameObjects, canvas, context) {
        var _this = this;
        this.canvas = canvas;
        this.context = context;
        this.gameObjects = {};
        this.deltaTime = 0;
        this.lastUpdate = 0;
        this.KEY = { UpArrow: 38, DownArrow: 40, LeftArrow: 37, RightArrow: 39 };
        this.keys = [];
        this.debug = {
            showBoundries: function (gameObjects) {
                if (gameObjects === void 0) { gameObjects = []; }
                if (gameObjects.length == 0) {
                }
                else {
                }
            },
            showRadius: function () {
            }
        };
        gameObjects.forEach(function (go) {
            _this.gameObjects[go.sprite.name] = go;
        });
        this.physics = {
            getInRadius: function (go1, radius, initialAngle, finalAngle) {
                if (initialAngle === void 0) { initialAngle = 0; }
                if (finalAngle === void 0) { finalAngle = 360; }
                var newGameObjects = [];
                gameObjects.forEach(function (go2) {
                    if (go2 != go1 && _this.getDistance(go1, go2) <= radius) {
                        newGameObjects.push(go2);
                    }
                });
                return newGameObjects;
            },
            isInRadius: function (go1, go2, radius, initialAngle, finalAngle) {
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
                var distance = _this.getDistance(go1, go2);
                var angle = _this.toDegrees(_this.getAngle(go1, go2));
                context.beginPath();
                context.arc(go1.x, go2.y, radius, _this.toRadians(initialAngle), _this.toRadians(finalAngle), false);
                context.closePath();
                context.lineWidth = 5;
                context.fillStyle = 'red';
                context.fill();
                context.strokeStyle = '#550000';
                context.stroke();
                return distance <= radius && angle >= initialAngle && angle <= finalAngle;
            }
        };
        document.onkeyup = function (e) {
            _this.keys[e.keyCode] = 0;
        };
        document.onkeydown = function (e) {
            if (_this.keys[e.keyCode] == 0 || !_this.keys[e.keyCode]) {
                _this.keys[e.keyCode] = 1;
            }
            else if (_this.keys[e.keyCode] == 1) {
                _this.keys[e.keyCode] = 2;
            }
        };
        this.keyboard = {
            isKeyDown: function (key) {
                return _this.keys[key] == 1 || _this.keys[key] == 2;
            },
            isKeyUp: function (key) {
                return _this.keys[key] == 0;
            },
            isKeyPressed: function (key) {
                return _this.keys[key] == 1;
            }
        };
    }
    Game.prototype.ngAfterViewInit = function () {
    };
    Game.prototype.setTime = function () {
        var now = Date.now();
        if (this.lastUpdate) {
            this.deltaTime = now - this.lastUpdate;
        }
        this.lastUpdate = now;
    };
    Game.prototype.toDegrees = function (angle) {
        var newAngle = angle * (180 / Math.PI);
        if (newAngle < 0) {
            newAngle = newAngle + 360;
        }
        return newAngle;
    };
    Game.prototype.toRadians = function (angle) {
        return angle * (Math.PI / 180);
    };
    Game.prototype.getDistance = function (go1, go2) {
        var deltaX = go2.x - go1.x;
        var deltaY = go2.y - go1.y;
        return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    };
    Game.prototype.getAngle = function (go1, go2) {
        var deltaX = go2.x - go1.x;
        var deltaY = go1.y - go2.y;
        return Math.atan2(deltaY, deltaX);
    };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=game.model.js.map