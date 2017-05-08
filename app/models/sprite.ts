import { Action } from './action';

export interface Sprite {
    name: string;
    src: string;
    width: number; 
    height: number; 
    code?: string;
    actions?: Action[]
}