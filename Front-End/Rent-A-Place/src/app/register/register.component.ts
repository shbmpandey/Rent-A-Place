import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  invalidCredential: boolean=false;

  constructor(
    private userService: UserService,
    private userAuthService: UserAuthService,
    private router: Router
  ) {}

  register(registerForm: NgForm) {
    this.userService.register(registerForm.value).subscribe(
      (response: any) => {
                
          this.router.navigate(['/login']);
        
        
      },
      (error) => {
        this.invalidCredential=true
      }
    );
  }
}
