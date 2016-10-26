import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './pages/app/app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);