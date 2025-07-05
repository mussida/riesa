import { CommonModule } from '@angular/common';
import { Component, model } from '@angular/core';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { AboutUsSectionComponent } from './components/about-us-section/about-us-section.component';
import { BottlesCarouselComponent } from './components/bottles-carousel/bottles-carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeImageComponent } from './components/home-image/home-image.component';
import { ImageSectionComponent } from './components/image-section/image-section.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, CommonModule, RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'riesa';
  isMenuActive = model<boolean>(false);
}
