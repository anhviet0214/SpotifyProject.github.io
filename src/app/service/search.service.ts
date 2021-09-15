import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  token = sessionStorage.getItem('token');
  type = [
    "album ","artist","playlist","track","show","episode"
  ];
  constructor(private http: HttpClient) {
  }

  search(query: string): Observable<any>{
    return this.http.get('https://api.spotify.com/v1/search',{
      headers: {
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + sessionStorage.getItem('token'),
      },
      params:{
        q:query.toString(),
        type: 'artist',
        offset:0,
        limit: 5,
      }
    })
  }
}
