import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomescreenComponent } from './pages/homescreen/homescreen.component';
import { SearchbarComponent } from './shared/searchbar.component';
import { SongItemComponent } from './shared/components/song-item/song-item/song-item.component';
import { PopularSongComponent } from './pages/homescreen/popular-song-component/popular-song/popular-song.component';
import { SongDetailComponent } from './pages/song-detail/song-detail/song-detail.component';
import { RouterModule } from '@angular/router';
import { SafePipe } from './pages/song-detail/song-detail/song-pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomescreenComponent,
    SearchbarComponent,
    SongItemComponent,
    PopularSongComponent,
    SongDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    SafePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
