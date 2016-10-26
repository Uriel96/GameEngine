import { Component, AfterViewInit, Input } from '@angular/core';
declare var $: any;

@Component({
    selector: 'show-action-modal',
    templateUrl: './app/pages/showAction/showAction.html'
})

export class ShowActionComponent implements AfterViewInit {
    @Input() action: any;
    animationImage: string;
    startAnimation: boolean;
    constructor(){
        this.startAnimation = false;
	}
    ngAfterViewInit() {
    }
    
    close() {
        this.startAnimation = false;
        $('#show-action-modal').modal('hide');
    }
}