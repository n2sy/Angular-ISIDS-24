import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  @Input() oneCandidat: Candidat;
  @Output() msgToListe = new EventEmitter();

  sendCandidatToListe() {
    this.msgToListe.emit(this.oneCandidat);
  }
}
