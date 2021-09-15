import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GetAlbumDetailService {

  constructor(
    private http:HttpClient ,
    private activatedRoute:ActivatedRoute,


  ) { }

  getAlbumDetail(id:any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + sessionStorage.getItem('token')
      })
    };
    return this.http.get(`https://api.spotify.com/v1/users/wizzler/playlists/${id}`, httpOptions);
    };

}
