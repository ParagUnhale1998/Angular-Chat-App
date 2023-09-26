import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { DynamicListRenderingComponent } from './dynamic-list-rendering/dynamic-list-rendering.component'
import { HttpClientModule } from '@angular/common/http';
import { RestapiComponent } from './restapi/restapi.component';
import { ChatComponent } from './chat/chat.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    DynamicListRenderingComponent,
    RestapiComponent,
    ChatComponent,
    SignupFormComponent,
    LoginComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
