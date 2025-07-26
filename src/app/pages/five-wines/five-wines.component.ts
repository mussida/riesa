import { Component } from '@angular/core';

@Component({
  selector: 'app-five-wines',
  imports: [],
  templateUrl: './five-wines.component.html',
  styleUrl: './five-wines.component.css',
})
export class FiveWinesComponent {
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
