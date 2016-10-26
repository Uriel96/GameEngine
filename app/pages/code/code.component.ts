import { Component, ViewChild, Input } from '@angular/core';
import { Sprite } from '../../models/sprite';
import { CodeDirective } from './code.directive';
import { SpritesService } from '../../services/sprites';

declare var $: any;

@Component({
  selector: 'code-component',
  templateUrl: './app/pages/code/code.html',
})

export class CodeComponent {
    selectedSprite: Sprite;
    @ViewChild(CodeDirective) codeEditor: CodeDirective;
    constructor(
        private spritesService: SpritesService
    ) {

    }

    ngDoCheck(): void {
        this.changeCode();
    }
    
    changeCode(){
        if(this.selectedSprite != this.spritesService.getSelectedSprite()) {
            this.codeEditor.editor.setValue(this.spritesService.getSelectedSprite().code);
            this.selectedSprite = this.spritesService.getSelectedSprite();
        }
    }
}