import { SongSearchServiceService } from './services/song-search-service.service';
import { Component, OnInit } from '@angular/core';
import { Ihits } from 'src/app/models/ihits';
import { Itracks } from 'src/app/models/itracks';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.scss']
})

export class HomescreenComponent implements OnInit {

  public myCharacters: any;
  // public mySongRequestList: Ihits[];

  constructor(private songSearchServiceService: SongSearchServiceService) { }

  ngOnInit(): void {
    this.getSongs();
  }

  public getSongs(): void {
    this.songSearchServiceService.getSongs().subscribe(
      (data: Itracks) => {
        console.log(data.tracks);
      }
    )
  }

}
