import { Component } from '@angular/core';
import { User } from 'src/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupUserData: any = {
    userName: '',
    password: ''
  };

  constructor() { }

  registerUser() {
    // Implement the registration logic here
  

    console.log('Registration function called');
    console.log(this.signupUserData); // Access form data
  }
}
