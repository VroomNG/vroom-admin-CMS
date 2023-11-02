import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

const router = inject (Router);

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  console.log('token', token)
  if(token){
    return true
  } else {
    router.navigate(['/login'])
    return false;
  }
 
};
