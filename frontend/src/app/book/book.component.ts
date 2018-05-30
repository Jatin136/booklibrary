import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html'
})
export class BookComponent implements OnInit {

  data: any;
  error;

  constructor(private book: BookService) { }

  ngOnInit() {
    this.book.getCounts().subscribe(
      (result: any) => {
        console.log('idar aya');
        this.data = result;
        console.log(result);
      },
      error => { this.error = error; },
      () => console.log('complete ' + this.data.data)
    );
  }

}
