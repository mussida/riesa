import { Routes } from '@angular/router';
import { WinesComponent } from './pages/wines/wines.component';
import { HomeComponent } from './pages/home/home.component';
import { WineDetailComponent } from './pages/wine-detail/wine-detail.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'wines', component: WinesComponent },
  { path: 'wines/:id', component: WineDetailComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contatti', component: ContactsComponent },
  {
    path: 'preventivo',
    component: QuoteFormComponent,
  },
];
