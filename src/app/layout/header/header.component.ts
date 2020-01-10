import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ILogin } from '../../services/login';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logged_User: string;
  users: ILogin[];
  constructor(
              // private router: Router, 
              private userService: LoginService) { }

  ngOnInit() {
    this.logged_User = localStorage.getItem('LoggedInUser');
    this.users = this.userService.getUsers();
    //console.log(this.users);
    
  }
  logOut(){
    localStorage.removeItem('LoggedInUser');
    //this.router.navigate(['login']); 
  }

}
