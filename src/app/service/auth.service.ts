import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(
  private router: ActivatedRoute,
) { }
getToken() {
  this.router.fragment.subscribe((fragment) => {
    const token = new URLSearchParams(fragment!).get('access_token');
      localStorage.setItem('token',JSON.stringify(token));
    })
 } 
} 
