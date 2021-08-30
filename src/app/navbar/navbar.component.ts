import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { cart } from '../core/data/data.component';
import { AppServiceService } from '../service/app-service.service';
import { GetAlbumService } from '../service/getAlbum.service';
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  token!:any;
  [x: string]: any;
  searchArtist$ = new Subject<string>();
  isSearch:boolean = false;
  isPlay:boolean = true;
  auth = 'https://accounts.spotify.com/authorize';
  clientID = '519056f08fce4cfb93a62f1129df9e89';
  redirectUri = 'http://localhost:4200/home';

  scopes  =  [

      "user-read-recently-played",
      "user-top-read",
      "user-read-playback-position",
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "streaming",
      "playlist-modify-public",
      "playlist-modify-private",
      "playlist-read-private",
      "playlist-read-collaborative",
      "user-library-modify",
      "user-library-read",
      "user-read-email",
      "user-read-private"

      ] ;
       params = new URLSearchParams({
        response_type: 'token',
        show_dialog: 'true',
        client_id:this.clientID ,
        redirect_uri:this.redirectUri ,
        scope:this.scopes.join(' ')
      })

      loginUri = `${this.auth}?${this.params.toString()}`
      //  loginUri= `${this.auth}?client_id=${this.clientID}&redirect_uri=${this.redirectUri}&scope=${this.scopes.join(' ')}&response_type=token`
      //  loginUri= `${this.authEndpoint}?client_id=${this.clienID}&redirect_uri=${this.redirectUri}&scope=${this.scopes.join("%20")}&response_type=token&show_dialog=true`
      // const getTokenFromUrl = () => {
      //   return window.location.hash
      //     .substring(1)
      //     .split('&')
      //     .reduce((initial,item) => {
      //       let parts = item.split('=');
      //       initial {parts[0]} = decodeURIComponent(parts[1])
      //       return initial;s

      //     }, {});


  data = [{
    id: 0
  }];

  constructor(
    private appService: AppServiceService,
    private location: Location,
    private router: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.router.fragment.subscribe((fragment) => {
      this.token = new URLSearchParams(fragment!).get('access_token')
    })

  }

  handlePlaylistNew(id:any) {
    this.data.push({
      id: this.data.length,
    })

  }
  prevPage(){
    this.location.back();
  }
  nextPage(){
    this.location.forward();
  }


      // const getTokenFromUrl = () => {
      //   return window.location.hash
      //     .substring(1)
      //     .split('&')
      //     .reduce((initial,item) => {
      //       let parts = item.split('=');
      //       initial {parts[0]} = decodeURIComponent(parts[1])
      //       return initial;

      //     }, {});






}
