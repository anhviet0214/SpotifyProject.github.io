import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './home-page/home-page.module';
import { SearchModule } from './Search/Search.module';
import { HttpClientModule } from '@angular/common/http'
import { HeaderComponent } from './layout/header/header.component';
import { PlaybarComponent } from './layout/playbar/playbar.component';
import { NavbarComponent} from './layout/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    PlaybarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // SearchModule,
    // HomePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
