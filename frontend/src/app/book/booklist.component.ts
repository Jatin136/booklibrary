import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html'
})
export class BooklistComponent implements OnInit {

  bookList;
  error;

  constructor(private book: BookService, private router: Router) { }

  ngOnInit() {
    this.book.getBookList().subscribe(
      (book_list: any[]) => {
        this.bookList = book_list;
      },
      error => { this.error = error; },
      () => console.log('number of books retrived ' + JSON.stringify(this.bookList.book_list))
    );
  }

  navigateToBook(url: string) {
    console.log('idar aya ' + url);
    this.router.navigate([ '/' + url]);
  }

}
