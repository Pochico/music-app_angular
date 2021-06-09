import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SongSearchService {

  constructor(private http: HttpClient) { }

  getSongs(searchParam: string) {
    return this.http.get(`https://shazam.p.rapidapi.com/search?term=${searchParam}&locale=en-US&rapidapi-key=e1c2fd537fmshcf8ffe3550b3853p1f797ejsn65975db58342`);
  }

}
