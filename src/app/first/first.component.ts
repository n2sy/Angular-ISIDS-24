import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
})
export class FirstComponent {
  prenom = 'Nicole';
  cl = 'pink';
  hd = false;

  showAlert() {
    alert('Click detecté ');
  }
}
