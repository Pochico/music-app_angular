import { PopularSongService } from '../../shared/services/popular-songs.service';
import { Component, OnInit } from '@angular/core';
import { Ihits } from 'src/app/models/ihits';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.scss']
})

export class HomescreenComponent implements OnInit {

  public songRequestReception?: Ihits[];

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

  public getSongRequest(songRequest: Ihits[]) {
    this.songRequestReception = songRequest;
  }

}
