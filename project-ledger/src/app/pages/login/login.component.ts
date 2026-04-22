import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    if (!this.email || !this.password) {
      alert('Please fill in all fields');
      return;
    }

    // Test login logic
    if (this.email === 'admin@test.com' && this.password === '1234') {
      alert('Login successful');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }
}
