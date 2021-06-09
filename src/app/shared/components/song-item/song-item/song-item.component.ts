import { Component, Input, OnInit } from '@angular/core';
import { Ihits } from 'src/app/models/ihits';

@Component({
  selector: 'app-song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.scss']
})

export class SongItemComponent implements OnInit {

  @Input() public songData!: Ihits;

  constructor() {
    this.songData = this.songData;
  }
  
  ngOnInit(): void {}

}
