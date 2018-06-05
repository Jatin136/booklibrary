import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookinstanceService {

  private url = 'http://localhost:3000/catalog/';

  constructor(private http: HttpClient) { }

  /**
   * getBookInstance
   */
  public getBookInstance() {
    console.log('came in getBookInstance');
    return this.http.get(this.url + 'bookinstances');
  }

  public getBookInstanceDetail(id: string) {
    console.log('came in getBookInstanceDetail');
    return this.http.get(this.url + '/bookinstance/' + id);
  }

}
