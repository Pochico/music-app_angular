import { Itracks } from './../../models/itracks';
import { PopularSongService } from '../../shared/services/popular-songs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.scss']
})

export class HomescreenComponent implements OnInit {

  constructor(private popularSongService: PopularSongService) { }

  ngOnInit(): void {
    this.getPopularSongs();
  }

  public getPopularSongs(): void {
    this.popularSongService.getPopularSongs().subscribe(
      (data:any) => {
        console.log(data);
      }
    )
  }

}
