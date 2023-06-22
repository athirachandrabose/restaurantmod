import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  password!: string;
  confirmPassword!: string;
  constructor(private router: Router) { }
  resetPassword() {
    // Implement the password reset logic here
  }
  reset(){
    this.router.navigate(['/login']);
  }
}
