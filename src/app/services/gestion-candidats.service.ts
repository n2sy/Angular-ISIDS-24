import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class GestionCandidatsService {
  link = 'http://localhost:3000/candidat';
  private allCandidats: Candidat[] = [
    new Candidat(1, 'Mehdi', 'Jeljli', 26, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'Majdi', 'Hosni', 24, 'directeur', 'homer.png'),
    new Candidat(3, 'Nicole', 'AlKassas', 21, 'Designer', 'lisa.png'),
  ];

  constructor(private http: HttpClient) {}

  getAllCandidats() {
    return this.allCandidats;
  }

  getAllCandidatsAPI(): Observable<Candidat[]> {
    return this.http.get<Candidat[]>(`${this.link}/all`);
  }
  getCandidatById(id) {
    return this.allCandidats.find((cand) => cand.id == id);
  }
  getCandidatByIdAPI(id) {
    return this.http.get(`${this.link}/all/${id}`);
  }

  addCandidat(newCand) {
    newCand.id = this.allCandidats[this.allCandidats.length - 1].id + 1;
    this.allCandidats.push(newCand);
  }

  addCandidatAPI(newCand) {
    return this.http.post(`${this.link}/new`, newCand);
  }

  updateCandidat(uCand) {
    let i = this.allCandidats.findIndex((cand) => cand.id == uCand.id);
    this.allCandidats[i] = uCand;
  }
  updateCandidatAPI(uCand) {
    return this.http.put(`${this.link}/edit/${uCand.id}`, uCand);
  }

  deleteCandidat(id) {
    let i = this.allCandidats.findIndex((cand) => cand.id == id);
    this.allCandidats.splice(i, 1);
  }
  deleteCandidatAPI(id) {
    return this.http.delete(`${this.link}/delete/${id}`);
  }
}
