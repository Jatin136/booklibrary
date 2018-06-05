import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  url = 'http://localhost:3000/catalog/';
  constructor(private http: HttpClient) { }

  public getGenreList() {
    console.log('came in getGenreList');
    return this.http.get(this.url + 'genres');
  }

  /**
   * getGenreDetail
   */
  public getGenreDetail(id: string) {
    console.log('came in getGenreDetail');
    return this.http.get(this.url + 'genre/' + id);
  }
}
