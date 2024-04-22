import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable()
export class GestionCandidatsService {
  private allCandidats: Candidat[] = [
    new Candidat(1, 'Mehdi', 'Jeljli', 26, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'Majdi', 'Hosni', 24, 'directeur', 'homer.png'),
    new Candidat(3, 'Nicole', 'AlKassas', 21, 'Designer', 'lisa.png'),
  ];

  getAllCandidats() {
    return this.allCandidats;
  }
  constructor() {}
}
