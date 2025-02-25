import { Component, input } from '@angular/core';
import { Wine } from '../bottles-carousel/bottles-carousel.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bottles-carousel-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bottles-carousel-card.component.html',
  styleUrl: './bottles-carousel-card.component.css',
})
export class BottlesCarouselCardComponent {
  wine = input<Wine>();
}
