import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { LoginService } from '../services/login.service';
import { ILogin } from '../services/login';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  submitted = false;
  userLoginForm: FormGroup;
  users: ILogin[];
  alertErroe = '';

  constructor(private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private userService: LoginService){}
   

  ngOnInit() {
    this.userLoginForm = this.fb.group({
      user_email: ['', Validators.required],
      user_password: ['', Validators.required]
    })
    
    this.users = this.userService.getUsers();

  }

  get fc() { return this.userLoginForm.controls; }

  onSubmit() {

    this.submitted = true;
    if (this.userLoginForm.valid) {
      let name = this.userLoginForm.value.user_email;
      let pass = this.userLoginForm.value.user_password;
      let i: any;
      for (i = 0; i < this.users.length; i++) {
        if (name === this.users[i].user_email && pass === this.users[i].user_password) {
          this.auth.setToken(this.userLoginForm.value.user_email);
          this.router.navigate(['home']);
          console.log('Name-' + this.users[i].user_name + ', Email-' + this.users[i].user_email);
          this.users[i].compair = true;
          break;

        } else {
          this.alertErroe = 'not matched'
        }
      }
    } else {

      return false;
    }
  }
}
