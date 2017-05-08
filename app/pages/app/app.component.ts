import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { AppDirective } from './app.directive';
import { GameObject } from '../../models/gameObject';
import { Sprite } from '../../models/sprite';
import { RuntimeExecutionService } from '../../services/runtimeExecution';
import { SpritesService } from '../../services/sprites';

declare var $: any;

@Component({
  selector: 'app',
  templateUrl: './app/pages/app/app.html',
  styleUrls: ['./app/pages/app/app.style.css']
})

export class AppComponent implements AfterViewInit {
    
    selectedSprite: Sprite;

    constructor(
        private runtimeExecutionService: RuntimeExecutionService,
        private spritesService: SpritesService
    ) {
	}
    
    ngAfterViewInit(): void {
        /*Resize Panels*/
        $(".panel-left").resizable({
            handles: "e"
        });
        $(".panel-center").resizable({
            handles: "e"
        });
        $(".panel-top").resizable({
            handles: "n, s"
        });
    }

    ngDoCheck(): void {
        
    }
    
    run(): void {
        if(!this.runtimeExecutionService.isInPlayMode()) {
            $(".game-disablement-content").addClass("game-disabled-content");
            this.runtimeExecutionService.setPlayMode();
        }
    }
    
    stop(): void {
        this.runtimeExecutionService.setEditMode();
        $(".game-disablement-content").removeClass("game-disabled-content");
    }

    step(): void {

    }

}