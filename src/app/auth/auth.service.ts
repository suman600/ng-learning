import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }
  
  setToken(token: string){
    localStorage.setItem('LoggedInUser', token)
  }
  getToken(){
    return localStorage.getItem('LoggedInUser')
  }
  isloggedIn(){
    return this.getToken() !== null;
  }
  logOut(){
    localStorage.removeItem('LoggedInUser')
    this.router.navigate(['login'])
  }
}
