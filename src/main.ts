import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; //Import platformBrowserDynamic function

import { AppModule } from './app/app.module'; //Import AppModule module

platformBrowserDynamic().bootstrapModule(AppModule) //Bootstrap the application
  .catch(err => console.error(err)); //Catch possible errors
