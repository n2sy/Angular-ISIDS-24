import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidat } from '../models/candidat';
import { GestionCandidatsService } from '../services/gestion-candidats.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css',
})
export class UpdateComponent {
  candidatToEdit: Candidat;
  constructor(
    private actRoute: ActivatedRoute,
    private candSer: GestionCandidatsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.candSer
      .getCandidatByIdAPI(this.actRoute.snapshot.paramMap.get('id'))
      .subscribe({
        next: (data: Candidat) => {
          this.candidatToEdit = data;
        },
        error: (err) => {
          this.router.navigateByUrl('/not-found');
        },
      });
    this.candidatToEdit = this.candSer.getCandidatById(
      this.actRoute.snapshot.params['id']
    );
  }

  submitHandler(f) {
    f.value.id = this.candidatToEdit.id;
    this.candSer.updateCandidatAPI(f.value).subscribe({
      next: (response) => {
        alert(response['message']);
        this.router.navigateByUrl('/cv');
      },
    });
  }
}
