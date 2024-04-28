import { Component, Inject, Input, inject } from '@angular/core';
import { Candidat } from '../models/candidat';
import { GestionRecruesService } from '../gestion-recrues.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  @Input() selCandidat: Candidat;
  recService = inject(GestionRecruesService);
  ngOnInit() {
    console.log(this.selCandidat);
  }

  addNewRecrue() {
    this.recService.addRecrue(this.selCandidat);
  }
}
