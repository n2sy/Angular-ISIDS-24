import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  showError = false;
  constructor(private auth: AuthService, private router: Router) {}
  onSubmit(f) {
    this.auth.seConnecter(f.value).subscribe({
      next: (response) => {
        console.log(response);
        localStorage.setItem('token', response['access_token']);
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        this.showError = true;
        f.reset();
      },
    });
  }
}
