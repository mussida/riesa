import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgxSplideComponent, NgxSplideModule } from 'ngx-splide';
import { BottlesCarouselCardComponent } from '../bottles-carousel-card/bottles-carousel-card.component';

export interface Wine {
  name: string;
  description: string;
  imageUrl: string;
  background: string;
}

@Component({
  selector: 'app-bottles-carousel',
  standalone: true,
  imports: [NgxSplideModule, BottlesCarouselCardComponent, CommonModule],
  templateUrl: './bottles-carousel.component.html',
  styleUrl: './bottles-carousel.component.css',
})
export class BottlesCarouselComponent {
  @ViewChild('mainSplide') rowTextWines: NgxSplideComponent | undefined;

  wines: Wine[] = [
    {
      name: 'Nebbiolo',
      description: 'A wine that is made from the finest grapes in the world.',
      imageUrl: 'assets/images/try.png',
      background: '#613138',
    },
    {
      name: 'Grigolino',
      description: 'A wine that is made from the finest grapes in the world.',
      imageUrl: 'assets/images/try.png',
      background: '#41324F',
    },
    {
      name: 'Brut',
      description: 'A wine that is made from the finest grapes in the world.',
      imageUrl: 'assets/images/try.png',
      background: '#303334',
    },
    {
      name: 'Rosato',
      description: 'A wine that is made from the finest grapes in the world.',
      imageUrl: 'assets/images/try.png',
      background: '#B896A5',
    },
    {
      name: 'Matuné',
      description: 'A wine that is made from the finest grapes in the world.',
      imageUrl: 'assets/images/try.png',
      background: '#2A413B',
    },
    {
      name: 'Sauvignon',
      description: 'A wine that is made from the finest grapes in the world.',
      imageUrl: 'assets/images/try.png',
      background: '#875632',
    },
  ];
  currentBackground: string = this.wines[0].background;

  onMove(args: any) {
    this.currentBackground = this.wines[args[0]].background;
  }
}
