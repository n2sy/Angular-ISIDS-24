import { Component } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {
  tabCandidats: Candidat[] = [
    new Candidat(1, 'Mehdi', 'Jeljli', 26, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'Majdi', 'Hosni', 24, 'directeur', 'homer.png'),
    new Candidat(3, 'Nicole', 'AlKassas', 21, 'Designer', 'lisa.png'),
  ];
  selectedCandidat: Candidat;

  RecupererCandidat(cand) {
    console.log(cand);

    this.selectedCandidat = cand;
  }
}
