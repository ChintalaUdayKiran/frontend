import { Component } from '@angular/core';
import { JwtClientService } from '../jwt-client.service';
import { AuthService } from '../auth.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginErrorMessage: string = '';
  credentials: any = {
    username: '',
    password: '',
  };

  constructor(
    private authService: JwtClientService,
    private service: AuthService,
    private router: Router
  ) {}

  public login() {
    this.authService.login(this.credentials)
      .subscribe(
        (response: any) => {
          console.log("Login successful:", response);
          this.service.isLoggedIn = true;
          // Redirect to 'welcome' route upon successful login
          const user = { username: this.credentials.username }; // Assuming you want to pass the username
          const navigationExtras: NavigationExtras = {
            state: { user }
          };
          this.router.navigate(['/welcome'], navigationExtras);
        },
        (error: any) => {
          console.error("Login failed:", error);
          this.service.isLoggedIn = false;
          if (error.status === 401) {
            // If invalid username/password, navigate to sign-up route
            this.router.navigate(['/signup']);
          } else {
            // For other errors, display an error message
            this.loginErrorMessage = 'Login failed. Please try again.';
          }
        }
      );
  }
}
