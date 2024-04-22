import { Injectable } from '@angular/core';
import { Candidat } from './models/candidat';

@Injectable({
  providedIn: 'root',
})
export class GestionRecruesService {
  allRecrues: Candidat[] = [];

  getAllRecrues() {
    return this.allRecrues;
  }

  addRecrue(newRecrue) {
    if (this.allRecrues.indexOf(newRecrue) == -1)
      this.allRecrues.push(newRecrue);
    else alert('Ce candidat a déjà été recruté');
  }

  constructor() {}
}
