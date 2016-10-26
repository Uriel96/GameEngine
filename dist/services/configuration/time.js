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
var TimeService = (function () {
    function TimeService() {
        this.deltaTime = 0;
        this.initialTimer = -1;
        this.time = 0;
        this.lastUpdate = 0;
    }
    TimeService.prototype.ngOnChange = function () {
    };
    TimeService.prototype.setTime = function () {
        var now = Date.now();
        if (this.lastUpdate) {
            this.deltaTime = now - this.lastUpdate;
        }
        this.lastUpdate = now;
        if (this.initialTimer > 0) {
            this.time = now - this.initialTimer;
        }
    };
    TimeService.prototype.initializeTimer = function () {
        this.initialTimer = Date.now();
    };
    TimeService.prototype.clearTimer = function () {
        this.initialTimer = -1;
        this.time = 0;
    };
    TimeService.prototype.clear = function () {
        clearInterval(this.timer);
    };
    TimeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TimeService);
    return TimeService;
}());
exports.TimeService = TimeService;
//# sourceMappingURL=time.js.map