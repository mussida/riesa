import { CommonModule } from '@angular/common';
import { Component, model } from '@angular/core';
import { BottlesCarouselComponent } from './components/bottles-carousel/bottles-carousel.component';
import { HomeImageComponent } from './components/home-image/home-image.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule,
    HomeImageComponent,
    WhoWeAreComponent,
    BottlesCarouselComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'riesa';
  isMenuActive = model<boolean>(false);
}
