import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  token: any;
  constructor(private activatedRoute: ActivatedRoute) {}

  // public setToken(token: string) {
  //   sessionStorage.setItem('token', token);
  // }
  setToken(){
    this.activatedRoute.fragment.subscribe(fragment =>{
      this.token = new URLSearchParams(fragment!).get('access_token');
        sessionStorage.setItem('token',this.token!);
    })
  }

}
