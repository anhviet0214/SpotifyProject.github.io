import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppServiceService } from '../service/app-service.service';
import { GetAlbumDetailService } from '../service/getAlbumDetail.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  playList:any;
  playListTracks:any;
  constructor(
    private appService: AppServiceService,
    private activatedRoute:ActivatedRoute,
    private getAlbumDetail:GetAlbumDetailService,
  ) { }

  ngOnInit() {
   this.activatedRoute.paramMap.subscribe(params => {
    if(params.get('id')){
      this.getDetail(params.get('id'));
    }



   })
  }
  getDetail(id:any) {
  this.getAlbumDetail.getAlbumDetail(id).subscribe(playlist => {
    this.playList = playlist;
    this.playListTracks = playlist.tracks;
    console.log(this.playListTracks)
  })
  }
}
