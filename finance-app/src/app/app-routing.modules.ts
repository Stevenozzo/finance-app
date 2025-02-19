import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Importa il componente standalone

const routeConfig: Routes = [
  { path: './home/home.component.html', component: HomeComponent }, // Usa direttamente il componente
];

@NgModule({
  imports: [RouterModule.forRoot(routeConfig)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
