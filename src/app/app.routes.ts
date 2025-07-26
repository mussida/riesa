import { Routes } from '@angular/router';
import { WinesComponent } from './pages/wines/wines.component';
import { HomeComponent } from './pages/home/home.component';
import { WineDetailComponent } from './pages/wine-detail/wine-detail.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'wines', component: WinesComponent },
  { path: 'wines/:id', component: WineDetailComponent },
  { path: 'gallery', component: GalleryComponent },
];
