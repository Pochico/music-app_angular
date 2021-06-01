import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SongSearchService {

  constructor(private http: HttpClient) { }

  getSongs(searchParam: string) {
    return this.http.get(`https://shazam.p.rapidapi.com/search?term=${searchParam}&locale=en-US&rapidapi-key=9cee1cc7c9msh1fc2b83f7183523p157404jsn73904e8f777b`);
  }

}
