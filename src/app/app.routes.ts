import { Routes } from '@angular/router';
import { WinesComponent } from './pages/wines/wines.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'wines', component: WinesComponent },
];
