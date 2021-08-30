import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchComponent } from './Search/Search.component';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home-page/home-page.module').then(e => e.HomePageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./Search/Search.module').then(e => e.SearchModule)
  },
  {
    path: 'playlist/:id',
    loadChildren: () => import('./playlist/playlist.module').then(e => e.PlaylistModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(e => e.LoginModule)
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {preloadingStrategy: PreloadAllModules}
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor (private router:ActivatedRoute ){
    
  }
}
