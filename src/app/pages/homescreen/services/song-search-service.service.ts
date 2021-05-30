import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongSearchServiceService {

  public apiURL: string = 'https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?id=40008598&locale=en-US&rapidapi-key=9cee1cc7c9msh1fc2b83f7183523p157404jsn73904e8f777b';
  
  constructor(private http: HttpClient) {}

  getSongs() {
    return this.http.get(this.apiURL);
  }

}
