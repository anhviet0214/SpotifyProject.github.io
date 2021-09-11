import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { AppServiceService } from 'src/app/service/app-service.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  token!: any;
  [x: string]: any;
  searchArtist$ = new Subject<string>();
  isSearch: boolean = false;
  isPlay: boolean = true;
  auth = 'https://accounts.spotify.com/authorize';
  clientID = '940842245ec74580998b76164a6ed720';
  redirectUri = 'http://localhost:4200/home';

  scopes = [
    'user-read-recently-played',
    'user-top-read',
    'user-read-playback-position',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'streaming',
    'playlist-modify-public',
    'playlist-modify-private',
    'playlist-read-private',
    'playlist-read-collaborative',
    'user-library-modify',
    'user-library-read',
    'user-read-email',
    'user-read-private',
  ];

  params = new URLSearchParams({
    response_type: 'token',
    show_dialog: 'true',
    client_id: this.clientID,
    redirect_uri: this.redirectUri,
    scope: this.scopes.join(' '),
  });

  loginUri = `${this.auth}?${this.params.toString()}`;
  data = [
    {
      id: 0,
    },
  ];

  constructor(
    private appService: AppServiceService,
    private location: Location,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.router.fragment.subscribe((fragment) => {
    //   this.token = new URLSearchParams(fragment!).get('access_token');
    // });
  }

  handlePlaylistNew(id: any) {
    this.data.push({
      id: this.data.length,
    });
  }
  prevPage() {
    this.location.back();
  }
  nextPage() {
    this.location.forward();
  }
}
