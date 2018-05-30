import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  url = 'http://localhost:3000/catalog/';
  constructor(private http: HttpClient) { }

  public getGenreList() {
    return this.http.get(this.url + 'genres');
  }
}
