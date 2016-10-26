import { Component, AfterViewInit, Input } from '@angular/core';
declare var $: any;

@Component({
    selector: 'create-sprite-sheet-modal',
    templateUrl: './app/pages/createSpriteSheet/createSpriteSheet.html'
})

export class CreateSpriteSheetComponent implements AfterViewInit {
    @Input() sprite: any;
    newActionName: string;
    actions: Array<any>;
    action: any;
	startAnimation: boolean = false;
    
    constructor(){
        this.actions = [];
        this.action = {
            name: "",
            
        };
	}
    ngAfterViewInit() {
        /*Select Action of Sprite Sheet*/
        var originalHeight = $('#sprite-sheet').naturalHeight;
        var originalWidth = $('#sprite-sheet').naturalWidth;
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
                var porcX = img.naturalWidth / img.width;
                var porcY = img.naturalHeight / img.height;
                this.action.resizedx1 = selection.x1;
                this.action.resizedy1 = selection.y1;
                this.action.resizedx2 = selection.x2;
                this.action.resizedy2 = selection.y2;
                this.action.x1 = Math.round(selection.x1 * porcX);
                this.action.y1 = Math.round(selection.y1 * porcY);
                this.action.x2 = Math.round(selection.x2 * porcX);
                this.action.y2 = Math.round(selection.y2 * porcY);
                
                this.updateGrid();
            }
        });
    }
    
    updateGrid(): void {
        var posX = this.action.resizedx1 + $('#sprite-sheet').position().left;
        var posY = this.action.resizedy1 + $('#sprite-sheet').position().top;
        var width = this.action.resizedx2 - this.action.resizedx1;
        var height = this.action.resizedy2 - this.action.resizedy1;
        $('.box').remove();
        for(var i = 0; i < this.action.numCol; i++){
            for(var j = 0; j < this.action.numRow; j++){
                var w = width / this.action.numCol;
                var h = height / this.action.numRow;
                var pX = posX + (i * w);
                var pY = posY + (j * h);
                $('#sprite-sheet').parent().append('<div class="box" style="top:' + pY + ';left: ' + pX + ';width:' + w + 'px;height:' + h + 'px;"></div>');
            }
        }
    }
    
    addAction(): void {
        this.actions.push({
            name: this.newActionName
        });
        this.changeAction(this.newActionName);
        this.newActionName = '';
    }
    
    getAction(actionName: string): any {
        return this.actions.find(function(anAction){
            return anAction.name == actionName;
        });
    }
    
    changeAction(actionName: string): void {
        this.action = this.getAction(actionName);
        if(this.action) {
            var spriteSheet = $('#sprite-sheet').imgAreaSelect({ 
                instance: true
            });
            spriteSheet.setSelection(this.action.resizedx1,this.action.resizedy1, this.action.resizedx2, this.action.resizedy2, true);
            spriteSheet.setOptions({ show: true });
            spriteSheet.update();
        }
    }
    
    deleteAction(actionName: string): void {
        for(var i = 0; i < this.actions.length; i++){
            if(this.actions[i].name == actionName){
                this.actions.splice(i, 1);
                return;
            }
        }
    }
    
    showAnimation() {
        var width = (this.action.x2 - this.action.x1) / this.action.numCol;
        var height = (this.action.y2 - this.action.y1) / this.action.numRow;
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