import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AppServiceService } from '../service/app-service.service';
import { debounceTime, map, tap} from 'rxjs/operators';
import { Artist } from '../interface/artist';
@Component({
  selector: 'app-Search',
  templateUrl: './Search.component.html',
  styleUrls: ['./Search.component.scss']
})
export class SearchComponent implements OnInit {
  searchArtist$ = new Subject<string>();

  artists$ = new Observable<Artist[]>();
  constructor(
    private appService: AppServiceService,
  ) { }

  ngOnInit() {
    // this.handleInputChange();
    // console.log()
  }
  // handleInputChange(){
  //   this.searchArtist$
  //   .pipe(
  //     debounceTime(1000),
  //     tap((query) =>{
  //       this.artists$ = this.appService.getArtist(query)
  //       .pipe(
  //         map((res)=>{
  //           console.log(res.artists.items as Artist[]);
  //           return res.artists.items as Artist[];
  //         })
  //       )
  //     })
//     ).subscribe()
//   }
// 
}
