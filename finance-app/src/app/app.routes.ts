import { Routes } from '@angular/router'; // Import the Home Component
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '', // This makes HomeComponent the default route
    component: HomeComponent,
  },
];
