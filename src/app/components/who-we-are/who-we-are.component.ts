import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-who-we-are',
  imports: [CommonModule],
  templateUrl: './who-we-are.component.html',
  styleUrl: './who-we-are.component.css',
})
export class WhoWeAreComponent {
  isVisible = false;
  @ViewChild('whoWeAre', { static: true }) whoWeAreSection!: ElementRef;

  ngOnInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this.isVisible = true;
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(this.whoWeAreSection.nativeElement);
  }
}
