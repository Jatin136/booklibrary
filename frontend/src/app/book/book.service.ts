import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = 'http://localhost:3000/catalog/';

  constructor(private http: HttpClient) {}

  /**
   * getCount
   */
  public getCounts() {
    console.log('came in getCounts');
    return this.http.get(this.url);
  }

  public getBookList() {
    console.log('came in getBookList');
    return this.http.get(this.url + 'books');
  }

  public getBookDetails(id: string) {
    console.log('getBookDetails service method called');
    return this.http.get(this.url + 'book/' + id);
  }
}
