import { Component } from '@angular/core';
import { Candidat } from '../models/candidat';
import { GestionCandidatsService } from '../services/gestion-candidats.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {
  fullname = 'karima gharbi';
  d = new Date();
  tabCandidats: Candidat[] = [];
  selectedCandidat: Candidat;

  constructor(private candSer: GestionCandidatsService) {}
  //candSer = inject(GestionCandidatsService);

  ngOnInit() {
    this.tabCandidats = this.candSer.getAllCandidats();
  }

  RecupererCandidat(cand) {
    console.log(cand);

    this.selectedCandidat = cand;
  }
}
