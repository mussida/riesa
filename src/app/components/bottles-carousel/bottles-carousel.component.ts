import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgxSplideComponent, NgxSplideModule } from 'ngx-splide';
import { BottlesCarouselCardComponent } from '../bottles-carousel-card/bottles-carousel-card.component';

export interface Wine {
  name: string;
  description: string;
  imageUrl: string;
  background: string;
  textColor?: string;
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
      textColor: '#fff',
    },
    {
      name: 'Grigolino',
      description: 'A wine that is made from the finest grapes in the world.',
      imageUrl: 'assets/images/try.png',
      background: '#41324F',
      textColor: '#fff',
    },
    {
      name: 'Brut',
      description: 'A wine that is made from the finest grapes in the world.',
      imageUrl: 'assets/images/try.png',
      background: '#303334',
      textColor: '#fff',
    },
    {
      name: 'Rosato',
      description: 'A wine that is made from the finest grapes in the world.',
      imageUrl: 'assets/images/try.png',
      background: '#B896A5',
      textColor: '#fff',
    },
    {
      name: 'Matuné',
      description: 'A wine that is made from the finest grapes in the world.',
      imageUrl: 'assets/images/try.png',
      background: '#2A413B',
      textColor: '#fff',
    },
    {
      name: 'Sauvignon',
      description: 'A wine that is made from the finest grapes in the world.',
      imageUrl: 'assets/images/try.png',
      background: '#875632',
      textColor: '#fff',
    },
  ];

  currentBackground: string = this.wines[0].background;
  activeIndex = 0;

  onMove(args: any) {
    this.currentBackground = this.wines[args[0]].background;
    this.activeIndex = args[0];
  }

  isActive(index: number): boolean {
    return this.activeIndex === index;
  }
}
