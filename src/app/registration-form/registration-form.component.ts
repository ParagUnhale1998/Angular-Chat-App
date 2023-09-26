import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent {
  registrationForm!: FormGroup;
  passwordMatchError: boolean = false;
  registrationSuccess: boolean = false;
  registrationError: boolean = false;
  isMatch : boolean = false;
  constructor(private formBuilder: FormBuilder,private authservice:AuthService,private router :Router) {}

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['',Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }
  
  ConfirmPass() {
    this.isMatch =this.registrationForm.get('password')?.value ===this.registrationForm.get('confirmPassword')?.value;
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      if(this.isMatch){
        this.registrationSuccess = true;
        this.registrationError = false;
        this.authservice.login()

      }else{
        this.registrationSuccess = false;
        this.registrationError = true;
      }
    }
  }
}
