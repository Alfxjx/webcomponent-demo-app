import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import microApp from '@micro-zoe/micro-app'

import { AppModule } from './app/app.module';

microApp.start()

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
