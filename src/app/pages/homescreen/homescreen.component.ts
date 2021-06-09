import { PopularSongService } from './services/popular-songs.service';
import { Component, OnInit } from '@angular/core';
import { Ihits } from 'src/app/models/ihits';
import { IpopularSong } from 'src/app/models/ipopular-song';
import { IpopSong } from 'src/app/models/ipop-song';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.scss']
})

export class HomescreenComponent implements OnInit {

  public songRequestReception?: Ihits[];
  public popularSongRequest!: IpopularSong;

  constructor(private popularSongService: PopularSongService) { }

  ngOnInit(): void {
    this.getPopularSongs();
  }

  public getPopularSongs(): void {
    this.popularSongService.getPopularSongs().subscribe(
      (data: any) => {
        let dataResponse: IpopularSong = data
        this.popularSongRequest = dataResponse;
      }
    )
  }

  public getSongRequest(songRequest: Ihits[]): void {
    this.songRequestReception = songRequest;
  }

}
