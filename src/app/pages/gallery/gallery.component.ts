import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  // Immagini statiche per la sezione superiore
  staticImages = [
    {
      left: 'assets/images/bw18.jpg',
      right: 'assets/images/bw23.jpg',
    },
  ];

  // Tutte le immagini della galleria per il lightbox
  allImages = [
    'assets/images/bw18.jpg',
    'assets/images/bw23.jpg',
    'assets/images/bw27.jpg',
    'assets/images/bw16.jpg',
    'assets/images/bw20.jpg',
    'assets/images/bw21.JPG',
    'assets/images/bw19.jpg',
    'assets/images/bw.jpg',
    'assets/images/bw30.jpg',

  ];

  // Immagini per la griglia inferiore
  gridImages = [
    'assets/images/bw27.jpg',
    'assets/images/bw16.jpg',
    'assets/images/bw20.jpg',
    'assets/images/bw21.JPG',
    'assets/images/bw.jpg',
    'assets/images/bw30.jpg',
  ];

  // Stato del lightbox
  isLightboxOpen = false;
  currentLightboxIndex = 0;

  // Apre il lightbox con l'immagine selezionata
  openLightbox(imageSrc: string) {
    const index = this.allImages.indexOf(imageSrc);
    if (index !== -1) {
      this.currentLightboxIndex = index;
      this.isLightboxOpen = true;
      document.body.style.overflow = 'hidden'; // Blocca lo scroll del body
    }
  }

  // Chiude il lightbox
  closeLightbox() {
    this.isLightboxOpen = false;
    document.body.style.overflow = 'auto'; // Riabilita lo scroll del body
  }

  // Naviga alla prossima immagine
  nextImage() {
    this.currentLightboxIndex =
      (this.currentLightboxIndex + 1) % this.allImages.length;
  }

  // Naviga all'immagine precedente
  prevImage() {
    this.currentLightboxIndex =
      (this.currentLightboxIndex - 1 + this.allImages.length) %
      this.allImages.length;
  }

  // Gestisce i tasti freccia e ESC
  onKeyDown(event: KeyboardEvent) {
    if (!this.isLightboxOpen) return;

    switch (event.key) {
      case 'Escape':
        this.closeLightbox();
        break;
      case 'ArrowLeft':
        this.prevImage();
        break;
      case 'ArrowRight':
        this.nextImage();
        break;
    }
  }
}
