import {Injectable} from '@angular/core';
import { Sprite } from '../models/sprite';

@Injectable()
export class SpritesService {
    sprites: Sprite[] = [];

    constructor() {
        this.sprites = [
            {
                name: "mario", 
                src: "http://vignette1.wikia.nocookie.net/mario-fanon/images/3/37/Paper_Mario_Render_1.png/revision/latest?cb=20150214213522&path-prefix=es",
                width: 48.1,
                height: 60,
                code: `mario.applyGravity(this.dt);
                    if(keyboard.isKeyDown(KEY.RightArrow)){
                        mario.moveRight(5);
                    } else if(keyboard.isKeyDown(KEY.LeftArrow)){
                        mario.moveLeft(5);
                    }
                    if(keyboard.isKeyPressed(KEY.UpArrow) && timer < 25){
                        mario.moveUp(10);
                        timer++;
                    }
                    if(mario.inGround){
                        timer = 0;   
                    }`
            }, {
                name: "otro", 
                src: "http://i.stack.imgur.com/OrOS9.png",
                width: 54.4, 
                height: 58, 
                code: `otro.applyGravity(this.dt);`
            }, {
                name: "piso",
                src: "https://www.transparenttextures.com/patterns/dark-denim-3.png",
                width: 300,
                height: 20,
                code: `if(piso.isColliding(mario)){ console.log('tocando!!'); }`
            }
        ];
    }

    getSprites(): Sprite[] {
        return this.sprites;
    }

    getSpriteByName(spriteName: string): Sprite {
        return this.sprites.find((sprite) => {
            return sprite.name == spriteName;
        });
    }
    getSprite(index: number): Sprite {
        return this.sprites[index];
    }

    deleteSprite(spriteName: string): void {
        for(var i = 0; i < this.sprites.length; i++) {
            if(this.sprites[i].name == spriteName){
                this.sprites.splice(i, 1);
                return;
            }
        }
    }

    createSprite(sprite: Sprite) {
        this.sprites.push(sprite);
    }
}