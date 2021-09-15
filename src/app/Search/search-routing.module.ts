import { SearchComponent } from './Search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path:':value',
    component:SearchComponent
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class SearchRoutingModule { }
