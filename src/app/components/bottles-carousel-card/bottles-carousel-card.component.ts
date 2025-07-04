import { Component, input } from '@angular/core';
import { Wine } from '../bottles-carousel/bottles-carousel.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bottles-carousel-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './bottles-carousel-card.component.html',
  styleUrl: './bottles-carousel-card.component.css',
})
export class BottlesCarouselCardComponent {
  wine = input<Wine>();
}
