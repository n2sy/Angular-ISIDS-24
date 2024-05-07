import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  link = 'http://localhost:3000/auth/signin';
  constructor(private http: HttpClient) {}

  seConnecter(credentials) {
    return this.http.post(this.link, credentials);
  }

  inscription(credentials) {}
  seDeconnecter() {}

  estConnecte() {}
}
