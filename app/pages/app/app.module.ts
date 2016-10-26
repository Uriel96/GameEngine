import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppDirective } from './app.directive';
import { GameComponent } from '../game/game.component';
import { GameDirective } from '../game/game.directive';
import { WorldComponent } from '../world/world.component';
import { WorldDirective } from '../world/world.directive';
import { CodeComponent } from '../code/code.component';
import { CodeDirective } from '../code/code.directive';
import { SpritesComponent } from '../sprites/sprites.component';
import { SpriteDirective } from '../sprites/sprite.directive';
import { CreateSpriteComponent } from '../createSprite/createSprite.component';
import { ResizeSpriteComponent } from '../resizeSprite/resizeSprite.component';
import { CreateSpriteSheetComponent } from '../createSpriteSheet/createSpriteSheet.component';
import { ShowActionComponent } from '../showAction/showAction.component';
import { AppService } from '../../services/app';
import { RuntimeExecutionService } from '../../services/runtimeExecution';
import { ComponentsService } from '../../services/components';
import { SpritesService } from '../../services/sprites';
import { WorldObjectsService } from '../../services/worldObjects';
import { InputService } from '../../services/configuration/input';
import { GameService } from '../../services/game';
import { TimeService } from '../../services/configuration/time';
import { PhysicsService } from '../../services/configuration/physics';
import { GameObjectsService } from '../../services/gameObjects';
import { CameraService } from '../../services/configuration/camera';

@NgModule({
	imports: [ 
		BrowserModule,
		FormsModule
	],
	declarations: [
		AppComponent,
		AppDirective,
		GameComponent,
		GameDirective,
		WorldComponent,
		WorldDirective,
		CodeComponent,
		CodeDirective,
		SpritesComponent,
		SpriteDirective,
        CreateSpriteComponent,
        ResizeSpriteComponent,
        CreateSpriteSheetComponent,
        ShowActionComponent
	],
	providers: [
		AppService,
		RuntimeExecutionService,
		ComponentsService,
		SpritesService,
		WorldObjectsService,
		InputService,
		TimeService,
		PhysicsService,
		GameService,
		CameraService,
		GameObjectsService
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }