import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AppServiceService } from '../service/app-service.service';
import { debounceTime, map, tap} from 'rxjs/operators';
import { Artist } from '../interface/artist';
import { SearchService } from '../service/search.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-Search',
  templateUrl: './Search.component.html',
  styleUrls: ['./Search.component.scss']
})
export class SearchComponent implements OnInit {
  searchArtist$ = new Subject<string>();

  artists$ = new Observable<Artist[]>();
  isDefault:boolean= true;
  constructor(
    private appService: AppServiceService,
    private searchService: SearchService,
    private router: Router,
  ) { }

  ngOnInit() {
    // this.handleInputChange();
  }


  handleInputChange(){
    this.searchArtist$
    .pipe(
      debounceTime(1000),
      tap((query) =>{

        // this.router.navigateByUrl('search/' + query)
        this.artists$ = this.searchService.search(query)
        .pipe(
          map((res)=>{
            console.log(res);
            return res.artists.items as Artist[];
          })
        )
      })
    ).subscribe()
  }

}
