import { CommonModule } from '@angular/common';
import { Component, model } from '@angular/core';
import { BottlesCarouselComponent } from './components/bottles-carousel/bottles-carousel.component';
import { HomeImageComponent } from './components/home-image/home-image.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HoverTextImageComponent } from './components/hover-text-image/hover-text-image.component';
import { AboutUsSectionComponent } from './components/about-us-section/about-us-section.component';
import { DoubleImageLayoutComponent } from './components/double-image-layout/double-image-layout.component';
import { ImageSectionComponent } from './components/image-section/image-section.component';
import { RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    CommonModule,
    HomeImageComponent,
    WhoWeAreComponent,
    RouterOutlet,
    BottlesCarouselComponent,
    MenuComponent,
    FooterComponent,
    AboutUsSectionComponent,
    ImageSectionComponent,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'riesa';
  isMenuActive = model<boolean>(false);
}
