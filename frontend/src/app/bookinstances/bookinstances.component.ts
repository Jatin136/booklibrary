import { Component, OnInit } from '@angular/core';
import { BookinstanceService } from './bookinstance.service';

@Component({
  selector: 'app-bookinstances',
  templateUrl: './bookinstances.component.html'
})
export class BookinstancesComponent implements OnInit {

  bookinstances;

  constructor(private bookinstance: BookinstanceService) { }

  ngOnInit() {
    this.bookinstance.getBookInstance().subscribe(
      (bookinstances: any) => {
        this.bookinstances = bookinstances;
      },
      error => console.log(error),
      () => console.log('Completed getting bookinstance ' + JSON.stringify(this.bookinstances))
    );
  }

}
