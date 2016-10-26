import { GameObject } from './gameObject';
import { WorldObject } from './worldObject';

export class Component {
    codeText: string;
    
    constructor(codeText: string = "") {
        this.codeText = codeText;
    }
}