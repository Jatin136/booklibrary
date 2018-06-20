import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Genre } from '../models/genre';
import { catchError } from 'rxjs/operators';

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

  public createGenreGet() {
    console.log('came in createGenreGet');
    return this.http.get(this.url + '/genre/create');
  }

  public createGenrePost(genre: Genre) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const url = this.url + 'genre/create';
    const body = JSON.stringify(genre);

    return this.http.post(url, body, httpOptions);
  }

  public deleteGenreGet(id: string) {
    const url = this.url + 'genre/' + id + '/delete';
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  public deleteGenrePost(id: string) {
    console.log('came in deleteGenrePost');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const url = this.url + 'genre/' + id + '/delete';
    const body = JSON.stringify({id: id});
    console.log(url + ' ' + body);
    return this.http.post(url, body, httpOptions).pipe(catchError(this.handleError));
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
