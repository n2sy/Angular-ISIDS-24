import { Component, EventEmitter, Output } from '@angular/core';
import { Candidat } from '../models/candidat';
import { GestionCandidatsService } from '../services/gestion-candidats.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css',
})
export class ListeComponent {
  allCandidats: Candidat[];
  @Output() msgToCv = new EventEmitter();

  constructor(private candSer: GestionCandidatsService) {}
  ngOnInit() {
    this.candSer.getAllCandidatsAPI().subscribe({
      next: (data: Candidat[]) => {
        this.allCandidats = data;
      },
      error: (err) => {
        alert('Problème...Données fictives chargées!');
        this.allCandidats = this.candSer.getAllCandidats();
        console.log(err);
      },
    });
  }

  sendCandidatToCv(cand) {
    this.msgToCv.emit(cand);
  }
}
