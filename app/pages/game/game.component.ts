import { Component, ViewChild, Input } from '@angular/core';
import { GameDirective } from './game.directive';
import { SpritesService } from '../../services/sprites';
import { WorldObjectsService } from '../../services/worldObjects';
import { RuntimeExecutionService } from '../../services/runtimeExecution';

declare var $: any;

@Component({
    selector: 'game-component',
    templateUrl: './app/pages/game/game.html',
})

export class GameComponent {
    @ViewChild(GameDirective) game: GameDirective;
    first: boolean = false;

    constructor(
        private spritesService: SpritesService, 
        private objectsService: WorldObjectsService,
        private runtimeExecutionService: RuntimeExecutionService
    ) {

    }

    ngDoCheck(): void {
        if(this.runtimeExecutionService.isInPlayMode() && !this.first) {
            this.runtimeExecutionService.precompile(this.game.canvas, this.game.context);
            this.runtimeExecutionService.compile();
            this.runtimeExecutionService.run(this.game.canvas, this.game.context);
            this.first = true;
        }
        if(!this.runtimeExecutionService.isInPlayMode()){
            this.runtimeExecutionService.stop();
            this.first = false;
        }
    }
}