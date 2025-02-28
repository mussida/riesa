import { Component } from '@angular/core';
import { HomeImageComponent } from '../../components/home-image/home-image.component';
import { WhoWeAreComponent } from '../../components/who-we-are/who-we-are.component';
import { BottlesCarouselComponent } from '../../components/bottles-carousel/bottles-carousel.component';
import { ImageSectionComponent } from '../../components/image-section/image-section.component';
import { AboutUsSectionComponent } from '../../components/about-us-section/about-us-section.component';

@Component({
  selector: 'app-home',
  imports: [
    HomeImageComponent,
    WhoWeAreComponent,
    BottlesCarouselComponent,
    ImageSectionComponent,
    AboutUsSectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
