import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PopularSongService {

  constructor(private http: HttpClient) { }

  getPopularSongs() {
    return this.http.get(`https://shazam.p.rapidapi.com/charts/track?listId=ip-city-chart-3117735&locale=en-US&rapidapi-key=e1c2fd537fmshcf8ffe3550b3853p1f797ejsn65975db58342`);
  }
}