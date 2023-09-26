import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {
  signupForm!: FormGroup;
  passwordMismatch:boolean =false

  constructor(private fb: FormBuilder,private router:Router,private chatservice:ChatService) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      id: ['',], 

    });
  }
  ConfirmPass() {
    this.passwordMismatch = this.signupForm.get('password')?.value === this.signupForm.get('confirmPassword')?.value;
  }


  
  onSubmit() {
    if (this.signupForm.valid) {
       
      if(this.passwordMismatch){
        this.signupForm.get('id')?.setValue(this.signupForm.get('email')?.value);

        this.chatservice.addUser(this.signupForm.value).subscribe(res => console.log(res))
        console.log(this.signupForm.value);
        localStorage.setItem('userId',this.signupForm.get('username')?.value);

        // this.chatservice.userID = this.signupForm.get('username')?.value
        this.router.navigateByUrl('chat')
      }
      // Perform registration or form submission here
      // You can access the form values using this.signupForm.value
   
    }
  }
}
