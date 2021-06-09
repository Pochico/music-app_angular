import { Component, Input, OnInit } from '@angular/core';
import { IpopSong } from 'src/app/models/ipop-song';

@Component({
  selector: 'app-popular-song',
  templateUrl: './popular-song.component.html',
  styleUrls: ['./popular-song.component.scss']
})
export class PopularSongComponent implements OnInit {

  @Input() public popularSong!: IpopSong;

  constructor() {
    this.popularSong = this.popularSong;
  }

  ngOnInit(): void {}

}
