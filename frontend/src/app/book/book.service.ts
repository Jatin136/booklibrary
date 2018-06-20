import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

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

  public bookDeleteGet(id: string) {
    console.log('came in bookDeleteGet');
    const url = this.url + 'book/' + id + '/delete';
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  public bookCreateGet() {
    console.log('came in bookCreateGet');
    return this.http.get(this.url + 'book/create');
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${ JSON.stringify(error.error.message)}`);
    }
    // return an observable with a user-facing error message
    return throwError(error.error.message);
  }
}
