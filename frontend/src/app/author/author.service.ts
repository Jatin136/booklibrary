import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private url = 'http://localhost:3000/catalog/';

  constructor(private http: HttpClient) { }

  public getAuthorList() {
    return this.http.get(this.url + 'authors');
  }

  public getAuthorDetail(id: string) {
    console.log('came in getAuthorDetail');
    return this.http.get(this.url + 'author/' + id);
  }
}
