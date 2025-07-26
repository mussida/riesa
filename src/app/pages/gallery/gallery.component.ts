import { Component, OnInit, OnDestroy, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent implements OnInit, OnDestroy {
  private intervalId: any;
  constructor(private router: Router) {}

  images = [
    {
      left: 'assets/images/bw18.jpg',
      right: 'assets/images/bw23.jpg',
    },
    {
      left: 'assets/images/bw26.jpg',
      right: 'assets/images/b24.jpg',
    },
    {
      left: 'assets/images/bw11.jpg',
      right: 'assets/images/bw15.jpg',
    },
    {
      left: 'assets/images/bw31.jpg',
      right: 'assets/images/bw5.jpg',
    },
  ];

  landImages = [
    'assets/images/bw27.jpg',
    'assets/images/bw16.jpg',
    'assets/images/bw20.jpg',
    'assets/images/bw21.jpg',
    'assets/images/bw19.jpg',
    'assets/images/bw.jpg',
    'assets/images/bw30.jpg',
    'assets/images/gal8.jpg',
    'assets/images/gal9.jpg',
  ];

  currentImageIndex = 0;

  ngOnInit() {
    this.startImageSequence();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private startImageSequence() {
    this.intervalId = setInterval(() => {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.images.length;
    }, 3000);
  }
}
