import { Ihits } from './../../../models/ihits';
import { Itracks } from './../../../models/itracks';
import { SongSearchService } from '../../services/song-search.service';
import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  public searchValue!: string;
  public songRequestArray?: Ihits[];
  @Output() public songRequestEmitter = new EventEmitter<Ihits[]>();

  constructor(private songSearchService: SongSearchService) { }

  ngOnInit(): void {

  }

  public handleSearch() {
    this.getSongs(this.searchValue);
  }

  public getSongs(searchTerm: string) {
    this.songSearchService.getSongs(searchTerm).subscribe((data: Itracks) => {
      this.songRequestArray = data.tracks!.hits;
      console.log(this.songRequestArray);
    })
  }

  public emitSongs(songRequest: Ihits[]) {
    this.songRequestEmitter.emit(songRequest);
  }

}
