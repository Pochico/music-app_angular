import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IdetailSong } from 'src/app/models/idetail-song';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SongDetailService {

  constructor(private http: HttpClient) { }

  getDetailSong(keyParam: string)/*: Observable<IdetailSong>*/ {
    return this.http.get(`https://shazam.p.rapidapi.com/songs/get-details?key=${keyParam}&locale=en-US&rapidapi-key=e1c2fd537fmshcf8ffe3550b3853p1f797ejsn65975db58342`);
    // return this.http
    // .get(`https://shazam.p.rapidapi.com/songs/get-details?key=${keyParam}&locale=en-US&rapidapi-key=e1c2fd537fmshcf8ffe3550b3853p1f797ejsn65975db58342`)
    // .pipe(
    //   map((res: IdetailSong) => {
    //     if (!res) {
    //       console.log('Error ocurred.');
    //     }
    //     let title = res.title;
    //     let subtitle = res.subtitle;
    //     let image = res.images.coverart;
    //     let url = res.url;
    //     let genre = res.genres
    //   })
    // );

  }
}