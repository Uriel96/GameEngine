import { Component, AfterViewInit, Input } from '@angular/core';
import { Action } from '../../../models/action';
import { Sprite } from '../../../models/sprite';
import { ActionService } from '../../../services/action';
declare var $: any;

@Component({
    selector: 'create-sprite-sheet-modal',
    templateUrl: './app/pages/sprites/createSpriteSheet/createSpriteSheet.html'
})

export class CreateSpriteSheetComponent implements AfterViewInit {
    @Input() sprite: Sprite;
    newAction: Action;
    selectedAction: Action;
	startAnimation: boolean = false;
    
    constructor(private _actions: ActionService) {
        this.newAction = {
            name: ""
        };
	}

    ngAfterViewInit() {
        //Get Original Dimensions form Image
        var originalHeight = $('#sprite-sheet').naturalHeight;
        var originalWidth = $('#sprite-sheet').naturalWidth;

        //Make Image Selectable
        $('#sprite-sheet').imgAreaSelect({
            aspectRatio: '0:1',
            handles: true,
            fadeSpeed: 200,
            imageHeight: originalHeight, 
            imageWidth: originalWidth,
            onSelectEnd: (img, selection) => {
                if (!selection.width || !selection.height){
                    return;
                }

                //Retrieve dimensions from the selection
                var porcX = img.naturalWidth / img.width;
                var porcY = img.naturalHeight / img.height;
                this.selectedAction.resizedx1 = selection.x1;
                this.selectedAction.resizedy1 = selection.y1;
                this.selectedAction.resizedx2 = selection.x2;
                this.selectedAction.resizedy2 = selection.y2;
                this.selectedAction.x1 = Math.round(selection.x1 * porcX);
                this.selectedAction.y1 = Math.round(selection.y1 * porcY);
                this.selectedAction.x2 = Math.round(selection.x2 * porcX);
                this.selectedAction.y2 = Math.round(selection.y2 * porcY);
                
                this.updateGrid();
            }
        });
    }
    
    updateGrid(): void {
        var posX = this.selectedAction.resizedx1 + $('#sprite-sheet').position().left;
        var posY = this.selectedAction.resizedy1 + $('#sprite-sheet').position().top;
        var width = this.selectedAction.resizedx2 - this.selectedAction.resizedx1;
        var height = this.selectedAction.resizedy2 - this.selectedAction.resizedy1;
        $('.box').remove();
        for(var i = 0; i < this.selectedAction.numCol; i++){
            for(var j = 0; j < this.selectedAction.numRow; j++){
                var w = width / this.selectedAction.numCol;
                var h = height / this.selectedAction.numRow;
                var pX = posX + (i * w);
                var pY = posY + (j * h);
                $('#sprite-sheet').parent().append('<div class="box" style="top:' + pY + ';left: ' + pX + ';width:' + w + 'px;height:' + h + 'px;"></div>');
            }
        }
    }
    
    changeAction(name: string): void {
        this.selectedAction = this._actions.get(this.sprite, name);
        if(this.selectedAction) {
            var spriteSheet = $('#sprite-sheet').imgAreaSelect({ 
                instance: true
            });
            spriteSheet.setSelection(this.selectedAction.resizedx1,this.selectedAction.resizedy1, this.selectedAction.resizedx2, this.selectedAction.resizedy2, true);
            spriteSheet.setOptions({ show: true });
            spriteSheet.update();
        }
    }
    
    deleteAction(actionName: string): void {
        this._actions.delete(this.sprite, actionName);
    }

    addAction(): void {
        this._actions.add(this.sprite, this.newAction);
    }
    
    showAnimation() {
        var width = (this.selectedAction.x2 - this.selectedAction.x1) / this.selectedAction.numCol;
        var height = (this.selectedAction.y2 - this.selectedAction.y1) / this.selectedAction.numRow;
        $('.crop').css('width', width);
        $('.crop').css('height', height);
        var i = 0;
        this.startAnimation = true;
        function playAnimation () {
            setTimeout(() => {
                var posY = -this.action.y1;
                var posX = -this.action.x1 - (i * width);
                $('#previewImage').css('margin', posY + 'px 0 0 ' + posX + 'px');
                i++;
                if (i >= this.action.numCol) {
                    i = 0;
                }
                if(this.startAnimation){
                    playAnimation.call(this);
                }
            }, 1000 / this.action.speed);
        };
        playAnimation.call(this);
    }
     
    createSpriteSheet(){
        this.close();
    }
     
    close() {
        $('#create-sprite-sheet-modal').modal('hide');
    }
}