import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-us-section',
  imports: [CommonModule],
  templateUrl: './about-us-section.component.html',
  styleUrl: './about-us-section.component.css',
})
export class AboutUsSectionComponent {
  animationActive = false;
  @ViewChild('aboutUs', { static: true }) aboutUsection!: ElementRef;

  ngOnInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this.animationActive = true;
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(this.aboutUsection.nativeElement);
  }
}
