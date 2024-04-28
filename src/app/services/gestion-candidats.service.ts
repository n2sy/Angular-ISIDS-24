import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class GestionCandidatsService {
  private allCandidats: Candidat[] = [
    new Candidat(1, 'Mehdi', 'Jeljli', 26, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'Majdi', 'Hosni', 24, 'directeur', 'homer.png'),
    new Candidat(3, 'Nicole', 'AlKassas', 21, 'Designer', 'lisa.png'),
  ];

  getAllCandidats() {
    return this.allCandidats;
  }
  getCandidatById(id) {
    return this.allCandidats.find((cand) => cand.id == id);
  }

  deleteCandidat(id) {
    let i = this.allCandidats.findIndex((cand) => cand.id == id);
    this.allCandidats.splice(i, 1);
  }
  constructor() {}
}
