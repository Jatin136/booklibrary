import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { Author } from '../models/author';

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

  public createAuthor(author: Author) {
    console.log('came in createAuthor');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const url = this.url + 'author/create';
    const body = JSON.stringify(author);

    return this.http.post(url, body, httpOptions);
  }

  public deleteAuthorGet(id: string) {
    const url = this.url + 'author/' + id + '/delete';
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  public deleteAuthorPost(id: string) {

    console.log('came in deleteAuthorPost');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const url = this.url + 'author/' + id + '/delete';
    const body = JSON.stringify({authorid: id});
    console.log(url + ' ' + body);
    return this.http.post(url, body, httpOptions).pipe(catchError(this.handleError));
  }

  public updateAuthorGet(id: string) {
    console.log('came in updateAuthorGet');

    const url = this.url + 'author/' + id + '/update';
    return this.http.get(url).pipe(catchError(this.handleError));

  }

  public updateAuthorPost(author: Author) {
    console.log('came in updateAuthorPost');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    const body = JSON.stringify(author);
    const url = this.url + 'author/' + author.id + '/update';
    console.log('came in updateAuthorPost' + body);

    return this.http.post(url, body, httpOptions);
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
