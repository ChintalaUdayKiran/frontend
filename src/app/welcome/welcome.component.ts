import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JwtClientService } from '../jwt-client.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  userData: any = {};

  constructor(
    private route: ActivatedRoute,
    private jwtClientService: JwtClientService
  ) {}

  ngOnInit(): void {
    // Retrieve the user data passed from the LoginComponent
    this.route.paramMap.subscribe(params => {
      console.log(this.route.snapshot?.data);
      this.userData = this.route.snapshot?.data?.['user'];
      // Use this.userData as needed, for example, fetching payment data
      this.fetchPaymentData(this.userData.username);
    });
  }

  // Example function to fetch payment data
  fetchPaymentData(username: string): void {
    this.jwtClientService.welcome(username).subscribe(
      (data: any) => {
        console.log('Payment data:', data);
      },
      (error: any) => {
        console.error('Failed to fetch payment data:', error);

      }
    );
  }
}
