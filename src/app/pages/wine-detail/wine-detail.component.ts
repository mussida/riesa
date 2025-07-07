import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

export interface Wine {
  id?: number;
  name: string;
  denomination?: string;
  grape?: string;
  altitude?: string;
  soilComposition?: string;
  cultivationMethod?: string;
  harvest?: string;
  vinification?: string;
  aging?: string;
  description: string;
  alcohol?: string;
  servingTemperature?: string;
  agingPotential?: string;
  format?: string;
  closure?: string;
  imageUrl: string;
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
      altitude: '270 m.s.l.m.m.',
      soilComposition: '', // Non specificata nel PDF
      cultivationMethod: 'Guyot',
      harvest:
        "La vendemmia si svolge solitamente a fine settembre, a seconda dell'annata, quando si raggiungono le migliori condizioni di maturazione.",
      vinification:
        'La raccolta delle uve avviene manualmente, esclusivamente nelle prime ore della giornata in cui le temperature dei grappoli è più bassa. Le uve vengono raccolte in cassette, portate in cantina. Prima della pigia deraspatrice, le uve vengono selezionate e lavate. La macerazione sulle bucce dura circa 12 giorni, due rimontaggi al giorno per tenere sempre bagnato il cappello.',
      aging: 'Vasche di acciaio',
      description:
        'Il colore è un rosso rubino con riflessi violacei. Bouquet aromatico con sentori di frutti rossi con note di amarena e ciliegia. In bocca è piacevole, elegante, rotondo. Si percepisce equilibrio tra acidità e morbidezza.',
      alcohol: '14%vol',
      servingTemperature: '18°C',
      agingPotential: '3 – 5 anni',
      format: '0.75 l',
      closure: 'Tappo sughero',
      imageUrl: 'assets/images/try.png',
      background: '#2A413B',
      textColor: '#E5D5A3',
    },
    {
      id: 2,
      name: 'Vsin',
      denomination: 'Monferrato Nebbiolo DOC',
      grape: '100% Nebbiolo',
      altitude: '270 m.s.l.m.m.',
      soilComposition: '', // Non specificata nel PDF
      cultivationMethod: 'Guyot',
      harvest:
        "La vendemmia si svolge solitamente a settembre, a seconda dell'annata, quando si raggiungono le migliori condizioni di maturazione.",
      vinification:
        'La raccolta delle uve avviene manualmente, esclusivamente nelle prime ore della giornata in cui le temperature dei grappoli è più bassa. Le uve vengono raccolte in cassette, portate in cantina. Prima della pigia deraspatrice, le uve vengono selezionate e lavate. La macerazione sulle bucce dura circa 12 giorni, due rimontaggi al giorno per tenere sempre bagnato il cappello.',
      aging: 'Vasche di acciaio',
      description:
        "Il colore è un rosso rubino intenso. Bouquet aromatico con sentori di frutti rossi. In bocca è piacevole, elegante con sentori di cacao e liquirizia, armonico, dal tannino delicato e dall'ottimo finale lungo.",
      alcohol: '13.5%vol',
      servingTemperature: '18°C',
      agingPotential: '8 – 10 anni',
      format: '0.75 l',
      closure: 'Tappo sughero',
      imageUrl: 'assets/images/try.png',
      background: '#2A413B',
      textColor: '#E5D5A3',
    },
    {
      id: 3,
      name: 'Erni',
      denomination: 'Piemonte Cortese DOC',
      grape: '100% Cortese',
      altitude: '270 m.s.l.m.m.',
      soilComposition: '', // Non specificata nel PDF
      cultivationMethod: 'Guyot',
      harvest:
        "La vendemmia si svolge solitamente a fine agosto a seconda dell'annata, quando si raggiungono le migliori condizioni di maturazione.",
      vinification:
        'La raccolta delle uve avviene manualmente, esclusivamente nelle prime ore della giornata in cui le temperature dei grappoli è più bassa. Le uve vengono raccolte in cassette, portate in cantina. Prima della pigia deraspatrice, le uve vengono selezionate e lavate. La macerazione sulle bucce dura circa 2 giorni. Fermentazione a temperatura controllata tra i 12° e 14°C.',
      aging: 'Vasche di acciaio',
      description:
        'Il colore è giallo paglierino con riflessi dorati. Al naso il vino denota tutta la sua freschezza, si sentono note floreali e agrumate. In bocca è elegante, ben equilibrato e leggermente minerale.',
      alcohol: '12.5%vol',
      servingTemperature: '10°C',
      agingPotential: '2 – 3 anni',
      format: '0.75 l',
      closure: 'Tappo sughero',
      imageUrl: 'assets/images/try.png',
      background: '#D4C4A8',
      textColor: '#19120F',
    },
    {
      id: 4,
      name: 'Gamèl',
      denomination: 'Brut – Blanc de Blancs D.O.C.',
      grape: '50% Cortese 50% Pinot Bianco',
      altitude: '270 m.s.l.m.m.',
      soilComposition: '', // Non specificata nel PDF
      cultivationMethod: 'Guyot',
      harvest:
        "La vendemmia si svolge solitamente a metà agosto a seconda dell'annata, quando si raggiunge il migliore rapporto tra maturazione ed acidità.",
      vinification:
        'La raccolta delle uve avviene manualmente, esclusivamente nelle prime ore della giornata in cui le temperature dei grappoli è più bassa. Le uve vengono raccolte in cassette, portate in cantina. Prima della pigia deraspatrice, le uve vengono selezionate e lavate. Vinificazione in autoclave a temperatura controllata tra i 12° e 14°C.',
      aging: 'In autoclave sui propri lieviti',
      description:
        'Perlage elegante con una piacevole corona di bollicine. Colore paglierino. Bouquet netto e profumato. In bocca è fine, delicato e persistente.',
      alcohol: '12.5%vol',
      servingTemperature: '8°C',
      agingPotential: '2 – 3 anni',
      format: '0.75 l',
      closure: 'Tappo sughero',
      imageUrl: 'assets/images/try.png',
      background: '#303334',
      textColor: '#E5D5A3',
    },
    {
      id: 5,
      name: 'Salas',
      denomination: 'Rosato',
      grape: 'Prevalenza Barbera',
      altitude: '270 m.s.l.m.m.',
      soilComposition: '', // Non specificata nel PDF
      cultivationMethod: 'Guyot',
      harvest:
        "La vendemmia si svolge solitamente la prima settimana di agosto a seconda dell'annata, quando si raggiunge il migliore rapporto tra maturazione ed acidità.",
      vinification:
        'La raccolta delle uve avviene manualmente, esclusivamente nelle prime ore della giornata in cui le temperature dei grappoli è più bassa. Le uve vengono raccolte in cassette, portate in cantina. Prima della pigia deraspatrice, le uve vengono selezionate e lavate. La macerazione non avviene sulle bucce, il mosto viene tirato dopo la soffice pigiatura. Fermentazione a temperatura controllata tra i 12° e 14°C.',
      aging: 'Vasche in acciaio',
      description:
        'Il colore è un rosa tenue. Al naso il vino denota tutta la sua freschezza con note floreali e fruttate. In bocca è elegante e piacevole, ricco di sapori.',
      alcohol: '13%vol',
      servingTemperature: '8°C',
      agingPotential: '2 – 3 anni',
      format: '0.75 l',
      closure: 'Tappo sughero',
      imageUrl: 'assets/images/try.png',
      background: '#B896A5',
      textColor: '#692D46',
    },
    {
      id: 6,
      name: 'Luis',
      denomination: 'Grignolino del Monferrato Casalese D.O.C.',
      grape: 'Grignolino',
      altitude: '270 m.s.l.m.m.',
      soilComposition: '', // Non specificata nel PDF
      cultivationMethod: 'Guyot',
      harvest:
        "La vendemmia si svolge solitamente a fine settembre a seconda dell'annata, quando si raggiunge il migliore rapporto tra maturazione ed acidità.",
      vinification:
        'La raccolta delle uve avviene manualmente, esclusivamente nelle prime ore della giornata in cui le temperature dei grappoli è più bassa. Le uve vengono raccolte in cassette, portate in cantina. Prima della pigia deraspatrice, le uve vengono selezionate e lavate. La macerazione sulle bucce dura circa 12 giorni, due rimontaggi al giorno per tenere sempre bagnato il cappello.',
      aging: 'Vasche in acciaio',
      description:
        'Il colore è un rosso scarico. Al naso il vino si conferma sottile, delicato, ricco di profumi e molto fresco. Si sente la rosa canina, pepe nero e frutti rossi croccanti e note di marasca. Lasciato areare, il vino si apre ulteriormente e acquisisce maggiore complessità. In bocca il sorso è profondo con un forte dialogo tra freschezza e fiori di campo.',
      alcohol: '13.5%vol',
      servingTemperature: '8°C',
      agingPotential: '2 – 3 anni',
      format: '0.75 l',
      closure: 'Tappo sughero',
      imageUrl: 'assets/images/try.png',
      background: '#2A413B',
      textColor: '#E5D5A3',
    },
    {
      id: 7,
      name: 'Naima',
      denomination: 'Vino Rosso',
      grape: '50% Barbera 50% Barbera', // Come riportato nel PDF
      altitude: '270 m.s.l.m.m.',
      soilComposition: '', // Non specificata nel PDF
      cultivationMethod: 'Guyot',
      harvest:
        "La vendemmia si svolge solitamente a settembre, a seconda dell'annata, quando si raggiungono le migliori condizioni di maturazione.",
      vinification:
        'La raccolta delle uve avviene manualmente, esclusivamente nelle prime ore della giornata in cui le temperature dei grappoli è più bassa. Le uve vengono raccolte in cassette, portate in cantina. Prima della pigia deraspatrice, le uve vengono selezionate e lavate. La macerazione sulle bucce dura circa 12 giorni, due rimontaggi al giorno per tenere sempre bagnato il cappello.',
      aging: 'Vasche di acciaio',
      description:
        "Il colore è un rosso rubino. Bouquet aromatico con sentori di frutti rossi. In bocca è piacevole, elegante, dal tannino delicato e dall'ottimo finale lungo.",
      alcohol: '13%vol',
      servingTemperature: '18°C',
      agingPotential: '3 – 5 anni',
      format: '0.75 l',
      closure: 'Tappo sughero',
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
