import { Injectable } from '@angular/core';

@Injectable()
export class TimeService {
    deltaTime: number = 0;
    timer: NodeJS.Timer;
    initialTimer: number = -1;
    time: number = 0;
    private lastUpdate: number = 0;

    constructor(){

    }

    ngOnChange(): void {
        
    }

    setTime(): void {
        var now = Date.now();
        if(this.lastUpdate) {
            this.deltaTime = now - this.lastUpdate;
        }
        this.lastUpdate = now;
        if(this.initialTimer > 0){
            this.time = now - this.initialTimer;  
        }
    }

    initializeTimer(): void {
        this.initialTimer = Date.now();
    }

    clearTimer(): void {
        this.initialTimer = -1;
        this.time = 0;
    }

    clear(): void {
        clearInterval(this.timer);
    }
}