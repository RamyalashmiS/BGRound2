import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const signinGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userId = localStorage.getItem("UserId");
  
  if (userId) {
    return true;
  } else {
    
    router.navigate(['/task1']);
    return false;
  }
};
