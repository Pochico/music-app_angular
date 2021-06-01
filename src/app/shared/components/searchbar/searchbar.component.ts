import { SongSearchServiceService } from './../../../pages/homescreen/services/song-search-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  public searchValue!: string;

  constructor(private songSearchServiceService: SongSearchServiceService) { }

  ngOnInit(): void {
  }



  public handleSearch() {
    console.log('This is handle search');
  }

}
