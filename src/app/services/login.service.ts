import { Injectable } from '@angular/core';
import { ILogin } from './login';


@Injectable({
  providedIn: 'root'
})


export class LoginService {
  getUsers(): ILogin[] {
    return [
      { user_name: 'Admin', user_email: 'admin@gmail.com', user_password: 'admin111', compair: false },
      { user_name: 'User', user_email: 'user@gmail.com', user_password: 'user111', compair: false },
      { user_name: 'Test', user_email: 'test@gmail.com', user_password: 'test111', compair: false },
      { user_name: 'Welcome', user_email: 'welcome@gmail.com', user_password: 'welcome111', compair: false }
    ]
  }
  
}
