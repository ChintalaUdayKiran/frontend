import { Component } from '@angular/core';
import { JwtClientService } from '../jwt-client.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  newUser: any = {
    username: '',
    password: '',
    email: '',
    memberId: '',
    dateOfBirth: '',
  };

  constructor(private authService: JwtClientService) { }

  public signUp() {
    this.authService.signUp(this.newUser)
      .subscribe(
        (response: any) => {
          // Handle successful signup
          console.log("Signup successful:", response);
          // Optionally, navigate to a different page after successful signup
        },
        (error: any) => {
          // Handle signup error
          console.error("Signup failed:", error);
        }
      );
  }
}
