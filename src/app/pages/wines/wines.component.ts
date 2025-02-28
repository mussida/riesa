import { Component } from '@angular/core';
import { Wine } from '../../components/bottles-carousel/bottles-carousel.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wines',
  imports: [CommonModule],
  templateUrl: './wines.component.html',
  styleUrl: './wines.component.css',
})
export class WinesComponent {
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
}
