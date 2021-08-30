import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
public setToken(token: string) {
  localStorage.setItem('token', token);
}
}


