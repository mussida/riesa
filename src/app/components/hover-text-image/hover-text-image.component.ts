import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hover-text-image',
  imports: [CommonModule],
  templateUrl: './hover-text-image.component.html',
  styleUrl: './hover-text-image.component.css',
})
export class HoverTextImageComponent {
  menuItems = [
    { name: 'Cornetto Semplice', image: 'assets/images/image1.jpg' },
    { name: 'Brioche Sfogliata', image: 'assets/images/image1.jpg' },
    { name: 'Cruffin', image: 'assets/images/image1.jpg' },
    { name: 'Cannoli alla Siciliana', image: 'assets/images/image1.jpg' },
  ];

  hoveredImage: string | null = null;

  showImage(image: string) {
    console.log('showImage', image);
    this.hoveredImage = image;
  }

  hideImage() {
    this.hoveredImage = null;
  }
}
