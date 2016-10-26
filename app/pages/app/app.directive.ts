import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';
import { InputService } from '../../services/configuration/input';

@Directive({
    selector: '[main]'
})

export class AppDirective {
    constructor(public element: ElementRef, public renderer: Renderer, private inputService: InputService){
        
    }

    @HostListener('keyup', ['$event']) onKeyUp(event: KeyboardEvent) {
        this.inputService.keys[event.keyCode] = 0;
    }

    @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
        if(this.inputService.keys[event.keyCode] == 0 || !this.inputService.keys[event.keyCode]){
            this.inputService.keys[event.keyCode] = 1;
        }else if(this.inputService.keys[event.keyCode] == 1){
            this.inputService.keys[event.keyCode] = 2;
        }
    }
        
}