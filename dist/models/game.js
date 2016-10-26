"use strict";
var Game = (function () {
    function Game() {
        this.gameObjects = {};
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
        /*gameObjects.forEach(go => {
            this.gameObjects[go.sprite.name] = go;
        });*/
    }
    Game.prototype.ngAfterViewInit = function () {
    };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=game.js.map