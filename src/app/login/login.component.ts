import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  errorMessage: string = '';
  userdata: any;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private chatservice: ChatService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      // Send a POST request to your JSON server to authenticate the user
      this.chatservice.getUserById(this.loginForm.value.email).subscribe({
        next: (response: any) => {
          this.userdata = response;
          if (this.userdata.password === this.loginForm.value.password) {
            // Handle successful login (e.g., navigate to another page)
            console.log('Login successful:', response);
            this.router.navigateByUrl('chat');
            // this.chatservice.userID = this.userdata.username
            localStorage.setItem('userId',this.userdata.username);
          }
        },
        error: (error: any) => {
          this.errorMessage = 'Invalid username or password. Please try again.';
          alert(this.errorMessage)
          console.error('Login error:', error);
          this.router.navigateByUrl('/');
        },
      });
    }
  }
  navigateToLogin() {
    this.router.navigateByUrl('signup');
  }
}
