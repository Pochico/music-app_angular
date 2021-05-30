import { SongSearchServiceService } from './services/song-search-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.scss']
})

export class HomescreenComponent implements OnInit {

  public myCharacters: any;
  constructor(private songSearchServiceService: SongSearchServiceService) { }

  ngOnInit(): void {
    this.getSongs();
  }

  public getSongs(): void {
    this.songSearchServiceService.getSongs().subscribe(
      (data) => {
        console.log(data);
      }
    )
  }

}
