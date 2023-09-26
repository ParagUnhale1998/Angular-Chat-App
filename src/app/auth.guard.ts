import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ChatService } from './chat.service';

export const authGuard: CanActivateFn = (route, state) => {

  let _router = inject(Router)
  let _authService= inject(AuthService)
  let _chatService= inject(ChatService)
  let userId = localStorage.getItem('userId');
  if (_authService.isAuthenticateds() || _chatService.userID || userId) {
    return true;
  } else {
    // If the user is not authenticated, redirect to the login page or another route.
    _router.navigate(['/']);
    alert('login First')
    return false;
  }
};
