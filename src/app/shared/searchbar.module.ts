import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongItemComponent } from './components/song-item/song-item/song-item.component';



@NgModule({
  declarations: [
    SongItemComponent
  ],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SearchbarModule { }
