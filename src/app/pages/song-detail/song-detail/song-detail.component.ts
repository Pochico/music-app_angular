import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { IdetailSong } from 'src/app/models/idetail-song';
import { SongDetailService } from './song-detail-service/song-detail.service';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.scss']
})
export class SongDetailComponent implements OnInit {


  // TODO: esta vaina si la pongo como string | undefined me da error más abajo, ver cómo gestionar el tipado
  public key!: any;
  public detailedSong: any;
  public trustedUrl!: SafeUrl;

  constructor(private route: ActivatedRoute, private songDetailService: SongDetailService, private sanitizer: DomSanitizer) { }

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
        console.log(this.detailedSong);
        this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.detailedSong.url);
      }
    )
  }

}
