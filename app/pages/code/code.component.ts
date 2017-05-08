import { Component, ViewChild, Input } from '@angular/core';
import { Sprite } from '../../models/sprite';
import { CodeDirective } from './code.directive';
import { SpritesService } from '../../services/sprites';
import { GlobalService } from '../../services/global';

declare var $: any;

@Component({
  selector: 'code-component',
  templateUrl: './app/pages/code/code.html',
})

export class CodeComponent {
    selectedSprite: Sprite;
    @ViewChild(CodeDirective) codeEditor: CodeDirective;
    constructor(
        private _global: GlobalService
    ) {

    }

    ngDoCheck(): void {
        this.changeCode();
    }
    
    changeCode(){
        if(this.selectedSprite != this._global.selectedSprite) {
            this.codeEditor.editor.setValue(this._global.selectedSprite.code);
            this.selectedSprite = this._global.selectedSprite;
        }
    }
}