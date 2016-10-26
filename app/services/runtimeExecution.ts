import { Injectable } from '@angular/core';
import { GameObject } from '../models/gameObject';
import { Code } from '../models/code';
import { Component } from '../models/component';
import { Game } from '../models/game';
import { SpritesService } from './sprites';
import { WorldObjectsService } from './worldObjects';
import { ComponentsService } from './components';
import { InputService, KEY } from './configuration/input';
import { TimeService } from './configuration/time';
import { PhysicsService } from './configuration/physics';
import { GameObjectsService } from './gameObjects';

@Injectable()
export class RuntimeExecutionService {
    running: boolean = false;

    constructor(
        private timeService: TimeService,
        private physicsService: PhysicsService,
        private inputService: InputService,
        private componentsService: ComponentsService,
        private worldObjectsService: WorldObjectsService,
        private gameObjectsService: GameObjectsService
    ) { }

    run(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D): void {
        this.timeService.timer = setInterval(() => {
            this.update();
            this.render(canvas, context);
        }, 10);
    }

    update(): void {
        if(!this.running) return;
        this.timeService.setTime();
        this.gameObjectsService.gameObjects.forEach(gameObject => {
            gameObject.components.forEach(component => {
                (<any>component).executeCode(gameObject, this.inputService, KEY, this.physicsService, this.timeService, this.gameObjectsService.gameObjects);
            });
        });
    }

    stop(): void {
        this.gameObjectsService.gameObjects = [];
        this.timeService.clear();
    }

    render(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D): void {
        if(!this.running) return;
        context.fillStyle = "#FFFFFF";
        context.fillRect(0, 0, canvas.width, canvas.height);
        this.gameObjectsService.gameObjects.forEach(gameObject => {
            gameObject.update();
            gameObject.render(context, canvas);
        });
    }

    precompile(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D): void {
        if(!this.running) return;

        this.worldObjectsService.getObjects().forEach(worldObject => {
            this.gameObjectsService.gameObjects.push(new GameObject(worldObject, this.inputService, this.physicsService, this.timeService));
        });
    }

    compile(): void {
        if(!this.running) return;
        this.componentsService.components.forEach(component => {
            this.generateCode(component);
        });
    }

    private generateCode(component: Component){
        eval(`component['executeCode'] = function(gameObject, keyboard, KEY, physics, timer, gameObjects) {
            ${component.codeText}
            gameObject.update();
        };`);
    }

    setPlayMode(): void {
        this.running = true;
    }
    setEditMode(): void {
        this.running = false;
    }
    isInPlayMode(): boolean {
        return this.running;
    }
    
}