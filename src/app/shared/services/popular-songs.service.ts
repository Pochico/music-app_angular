import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PopularSongService {

  constructor(private http: HttpClient) { }

  getPopularSongs() {
    return this.http.get(`https://shazam.p.rapidapi.com/charts/track?listId=ip-city-chart-3117735&locale=en-US&rapidapi-key=9cee1cc7c9msh1fc2b83f7183523p157404jsn73904e8f777b`);
  }

}
