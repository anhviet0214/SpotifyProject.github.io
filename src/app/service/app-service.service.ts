import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppServiceService {
  

  constructor(private http: HttpClient) {
    const authEndpoint = 'https://accounts.spotify.com/authorize';
    const clienID = '4eae7ee5966740c48cb5999e1cc494b0';
    const clientSecret = '70e3663042354f39ac214dcd721015bc';
    const redirectUri = 'http://localhost:4200/home';
    const scopes = [
      "user-read-currently-playing",
      "user-read-recently-player",
      "user-read-playback-state",
      "user-top-read",
      "user-modify-playback-state",
    ] ;
  }

 

  }
 

 

