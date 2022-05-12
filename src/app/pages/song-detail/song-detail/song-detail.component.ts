import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { IdetailSong } from 'src/app/models/idetail-song';
import { SongDetailService } from './song-detail-service/song-detail.service';
import { SafePipe } from './song-pipe'

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.scss']
})
export class SongDetailComponent implements OnInit {


  public key!: any;
  public detailedSong: any;
  public trustedUrl!: SafeUrl;

  constructor(private route: ActivatedRoute, private songDetailService: SongDetailService, private sanitizer: DomSanitizer, private safePipe: SafePipe) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.key = params.get('key');
      this.getPopularSongs();
    });
  }
  
  getPopularSongs() {
    this.songDetailService.getDetailSong(this.key).subscribe(
      (data: any) => {
        let dataResponse: IdetailSong = data
        this.detailedSong = dataResponse;
        this.trustedUrl = this.safePipe.transform(this.detailedSong.url);
        console.log(this.detailedSong);
      }
    )
  }
  
}
