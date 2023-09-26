import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { DynamicListRenderingComponent } from './dynamic-list-rendering/dynamic-list-rendering.component';
import { RestapiComponent } from './restapi/restapi.component';
import { authGuard } from './auth.guard';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  // {path:'',component:RegistrationFormComponent},
  {path:'',component:LoginComponent},
  {path:'list',component:DynamicListRenderingComponent},
  {path:'signup',component:SignupFormComponent},
  {path:'login',component:LoginComponent},
  {path:'chat',component:ChatComponent,canActivate:[authGuard]},
  {path:'restapi',component:RestapiComponent,canActivate:[authGuard]},
  { path: '**', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
