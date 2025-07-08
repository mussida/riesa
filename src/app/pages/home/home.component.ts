import { Component } from '@angular/core';
import { AboutUsSectionComponent } from '../../components/about-us-section/about-us-section.component';
import { BottlesCarouselComponent } from '../../components/bottles-carousel/bottles-carousel.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HomeImageComponent } from '../../components/home-image/home-image.component';
import { WhoWeAreComponent } from '../../components/who-we-are/who-we-are.component';

@Component({
  selector: 'app-home',
  imports: [
    HomeImageComponent,
    WhoWeAreComponent,
    BottlesCarouselComponent,
    AboutUsSectionComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
