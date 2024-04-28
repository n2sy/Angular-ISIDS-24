import { Component } from '@angular/core';
import { GestionRecruesService } from '../gestion-recrues.service';

@Component({
  selector: 'app-recrues',
  templateUrl: './recrues.component.html',
  styleUrl: './recrues.component.css',
})
export class RecruesComponent {
  tabRecrues = [];
  constructor(private recService: GestionRecruesService) {}

  ngOnInit() {
    this.tabRecrues = this.recService.getAllRecrues();
  }
}
