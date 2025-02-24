import { Component, input } from '@angular/core';
import { Wine } from '../bottles-carousel/bottles-carousel.component';

@Component({
  selector: 'app-bottles-carousel-card',
  standalone: true,
  imports: [],
  templateUrl: './bottles-carousel-card.component.html',
  styleUrl: './bottles-carousel-card.component.css',
})
export class BottlesCarouselCardComponent {
  wine = input<Wine>();
}
