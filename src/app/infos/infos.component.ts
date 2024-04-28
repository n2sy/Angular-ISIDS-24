import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Candidat } from '../models/candidat';
import { GestionCandidatsService } from '../services/gestion-candidats.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css',
})
export class InfosComponent {
  id;
  selectedCand: Candidat;
  constructor(
    private actRoute: ActivatedRoute,
    private candSer: GestionCandidatsService,
    private router: Router
  ) {}

  ngOnInit() {
    //Version avec Params
    // this.id = this.actRoute.snapshot.params['id'];
    //Version avec paramMap
    // this.id = this.actRoute.snapshot.paramMap.get('id');

    //Version avec Observable
    this.actRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.selectedCand = this.candSer.getCandidatById(p.get('id'));
        if (!this.selectedCand) this.router.navigateByUrl('/not-found');
      },
      // error : () => {

      // },
      // complete : () => {

      // }
    });
  }

  onDelete() {
    if (confirm('Etes-vous sûr de vouloir supprimer ce candidat ?')) {
      this.candSer.deleteCandidat(this.selectedCand.id);
      this.router.navigateByUrl('/cv');
    }
  }
}
