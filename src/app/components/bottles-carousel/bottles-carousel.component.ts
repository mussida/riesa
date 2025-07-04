import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgxSplideComponent, NgxSplideModule } from 'ngx-splide';
import { BottlesCarouselCardComponent } from '../bottles-carousel-card/bottles-carousel-card.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface Wine {
  id?: number;
  name: string;
  description: string;
  imageUrl: string;
  background: string;
  textColor?: string;
}

@Component({
  selector: 'app-bottles-carousel',
  imports: [
    NgxSplideModule,
    BottlesCarouselCardComponent,
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './bottles-carousel.component.html',
  styleUrl: './bottles-carousel.component.css',
})
export class BottlesCarouselComponent {
  @ViewChild('mainSplide') rowTextWines: NgxSplideComponent | undefined;

  wines: Wine[] = [
    {
      id: 1,
      name: 'Nebbiolo',
      description: 'A wine that is made from the finest grapes in the world.',
      imageUrl: 'assets/images/try.png',
      background: '#613138',
      textColor: '#19120F',
    },
    {
      id: 2,
      name: 'Grigolino',
      description: 'A wine that is made from the finest grapes in the world.',
      imageUrl: 'assets/images/try.png',
      background: '#41324F',
      textColor: '#19120F',
    },
    {
      id: 3,
      name: 'Brut',
      description: 'A wine that is made from the finest grapes in the world.',
      imageUrl: 'assets/images/try.png',
      background: '#303334',
      textColor: '#e5decb',
    },
    {
      id: 4,
      name: 'Rosato',
      description: 'A wine that is made from the finest grapes in the world.',
      imageUrl: 'assets/images/try.png',
      background: '#B896A5',
      textColor: '#692D46',
    },
    {
      id: 5,
      name: 'Matuné',
      description: 'A wine that is made from the finest grapes in the world.',
      imageUrl: 'assets/images/try.png',
      background: '#2A413B',
      textColor: '#19120F',
    },
    {
      id: 6,
      name: 'Sauvignon',
      description: 'A wine that is made from the finest grapes in the world.',
      imageUrl: 'assets/images/try.png',
      background: '#875632',
      textColor: '#19120F',
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
