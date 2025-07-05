import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

export interface Wine {
  id?: number;
  name: string;
  denomination?: string;
  grape?: string;
  description: string;
  alcohol?: string;
  servingTemperature?: string;
  agingPotential?: string;
  imageUrl: 'assets/images/try.png';

  background: string;
  textColor?: string;
}

@Component({
  selector: 'app-wine-detail',
  imports: [CommonModule],
  templateUrl: './wine-detail.component.html',
  styleUrl: './wine-detail.component.css',
})
export class WineDetailComponent implements OnInit {
  wine: Wine | undefined;

  wines: Wine[] = [
    {
      id: 1,
      name: 'Matunè',
      denomination: "Barbera d'Asti D.O.C.G.",
      grape: '100% Barbera',
      description:
        'Il colore è un rosso rubino con riflessi violacei. Bouquet aromatico con sentori di frutti rossi con note di amarena e ciliegia. In bocca è piacevole, elegante, rotondo. Si percepisce equilibrio tra acidità e morbidezza.',
      alcohol: '14%vol',
      servingTemperature: '18°C',
      agingPotential: '3 – 5 anni',
      imageUrl: 'assets/images/try.png',

      background: '#2A413B',
      textColor: '#E5D5A3',
    },
    {
      id: 2,
      name: 'Vsin',
      denomination: 'Monferrato Nebbiolo DOC',
      grape: '100% Nebbiolo',
      description:
        "Il colore è un rosso rubino intenso. Bouquet aromatico con sentori di frutti rossi. In bocca è piacevole, elegante con sentori di cacao e liquirizia, armonico, dal tannino delicato e dall'ottimo finale lungo.",
      alcohol: '13.5%vol',
      servingTemperature: '18°C',
      agingPotential: '8 – 10 anni',
      imageUrl: 'assets/images/try.png',

      background: '#2A413B',
      textColor: '#E5D5A3',
    },
    {
      id: 3,
      name: 'Erni',
      denomination: 'Piemonte Cortese DOC',
      grape: '100% Cortese',
      description:
        'Il colore è giallo paglierino con riflessi dorati. Al naso il vino denota tutta la sua freschezza, si sentono note floreali e agrumate. In bocca è elegante, ben equilibrato e leggermente minerale.',
      alcohol: '12.5%vol',
      servingTemperature: '10°C',
      agingPotential: '2 – 3 anni',
      imageUrl: 'assets/images/try.png',

      background: '#D4C4A8',
      textColor: '#19120F',
    },
    {
      id: 4,
      name: 'Gamèl',
      denomination: 'Brut – Blanc de Blancs D.O.C.',
      grape: '50% Cortese 50% Pinot Bianco',
      description:
        'Perlage elegante con una piacevole corona di bollicine. Colore paglierino. Bouquet netto e profumato. In bocca è fine, delicato e persistente.',
      alcohol: '12.5%vol',
      servingTemperature: '8°C',
      agingPotential: '2 – 3 anni',
      imageUrl: 'assets/images/try.png',

      background: '#303334',
      textColor: '#E5D5A3',
    },
    {
      id: 5,
      name: 'Salas',
      denomination: 'Rosato',
      grape: 'Prevalenza Barbera',
      description:
        'Il colore è un rosa tenue. Al naso il vino denota tutta la sua freschezza con note floreali e fruttate. In bocca è elegante e piacevole, ricco di sapori.',
      alcohol: '13%vol',
      servingTemperature: '8°C',
      agingPotential: '2 – 3 anni',
      imageUrl: 'assets/images/try.png',

      background: '#B896A5',
      textColor: '#692D46',
    },
    {
      id: 6,
      name: 'Luis',
      denomination: 'Grignolino del Monferrato Casalese D.O.C.',
      grape: 'Grignolino',
      description:
        'Il colore è un rosso scarico. Al naso il vino si conferma sottile, delicato, ricco di profumi e molto fresco. Si sente la rosa canina, pepe nero e frutti rossi croccanti e note di marasca. In bocca il sorso è profondo con un forte dialogo tra freschezza e fiori di campo.',
      alcohol: '13.5%vol',
      servingTemperature: '8°C',
      agingPotential: '2 – 3 anni',
      imageUrl: 'assets/images/try.png',

      background: '#2A413B',
      textColor: '#E5D5A3',
    },
    {
      id: 7,
      name: 'Naima',
      denomination: 'Vino Rosso',
      grape: '50% Barbera 50% Barbera',
      description:
        "Il colore è un rosso rubino. Bouquet aromatico con sentori di frutti rossi. In bocca è piacevole, elegante, dal tannino delicato e dall'ottimo finale lungo.",
      alcohol: '13%vol',
      servingTemperature: '18°C',
      agingPotential: '3 – 5 anni',
      imageUrl: 'assets/images/try.png',

      background: '#8B4A6B',
      textColor: '#E5D5A3',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const wineId = +params['id']; // Il + converte la stringa in numero
      this.wine = this.wines.find((w) => w.id === wineId);
    });
  }
}
// This component displays the details of a specific wine based on the ID passed in the route parameters.
