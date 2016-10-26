import {Directive, ElementRef, Renderer} from '@angular/core';
declare var CodeMirror: any;

@Directive({
    selector: '[code]'
})

export class CodeDirective {
    editor: any;
    constructor(public element: ElementRef, public renderer: Renderer){
        this.editor = new CodeMirror.fromTextArea(element.nativeElement, {
            mode: "javascript",
            theme: "bespin", 
            textWrapping: true,
            lineNumbers: true, 
            extraKeys: {"Ctrl-Space": "autocomplete"}
        });
		this.editor.getDoc().setValue("");
    }
}