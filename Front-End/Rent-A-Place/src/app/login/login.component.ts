import { Component } from '@angular/core';
import { User } from 'src/user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginUserData = new User("","")
  route: any;

  constructor(private authService: AuthService, private _router:Router) { }


  loginUser() {
    // Implement the registration logic here
    console.log('login function called');
    console.log(this.loginUserData); // Access form data
  }
}

// loginUser() {
//   this.authService.loginUser(User).subscribe(
//     (response) => {
//       // Handle a successful login response here
//       this._router.navigate(['/special']);
//     },
//     (error) => {
//       // Handle any errors that may occur during login
//       console.error('Login failed', error);
//       // this._router.navigate(['/events']);
//     }
//   );

