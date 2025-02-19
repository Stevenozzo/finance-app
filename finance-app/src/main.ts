import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routeConfig } from './app/routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routeConfig)], // 🚀 Aggiunto qui!
}).catch((err) => console.error(err));
