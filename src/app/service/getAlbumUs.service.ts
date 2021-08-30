import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAlbumUsService {

constructor(
  private http:HttpClient

) { }

getAlbumUs(): Observable<any> {
 
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    })
  };
  return this.http.get('https://api.spotify.com/v1/browse/featured-playlists?country=us&offset=0&limit=6', httpOptions);
  };

}
