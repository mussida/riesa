import { Component } from '@angular/core';
import { Wine } from '../../components/bottles-carousel/bottles-carousel.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wines',
  imports: [CommonModule, RouterLink],
  templateUrl: './wines.component.html',
  styleUrl: './wines.component.css',
})
export class WinesComponent {
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
}
