import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private router:Router){}
  private isAuthenticated = false;

  login() {
    // Implement your login logic here
    this.isAuthenticated = true;
    this.router.navigateByUrl('restapi')
  }

  logout() {
    // Implement your logout logic here
    this.isAuthenticated = false;
  }

  isAuthenticateds(): boolean {
    return this.isAuthenticated;
  }
}
