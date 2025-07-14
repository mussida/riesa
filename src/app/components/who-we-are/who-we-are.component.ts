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
      { threshold: 0.2 }
    );

    observer.observe(this.whoWeAreSection.nativeElement);
  }

  vitigni = [
    {
      nome: 'Barbera',
      descrizione:
        'regina del Monferrato, da cui otteniamo vini intensi, energici e profondi.',
    },
    {
      nome: 'Grignolino',
      descrizione:
        'raffinato, elegante e autentico, simbolo del Piemonte più schietto.',
    },
    {
      nome: 'Nebbiolo',
      descrizione:
        'un progetto ambizioso che si nutre di tempo, esposizione e pazienza.',
    },
    {
      nome: 'Cortese',
      descrizione:
        'fresco, sapido, minerale, perfetto per raccontare il lato bianco del Monferrato.',
    },
    {
      nome: 'Sauvignon Blanc',
      descrizione:
        'interpretato in chiave piemontese, con eleganza, tensione e finezza.',
    },
  ];
}
