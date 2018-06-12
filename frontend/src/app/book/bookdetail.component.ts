import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BookService } from './book.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html'
})
export class BookdetailComponent implements OnInit {

  data: any;

  constructor(private book: BookService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    //  const id = this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line:radix
      const id = params.get('id');
      console.log(id);

      this.book.getBookDetails(id).subscribe((result: any) => {
        this.data = result;
      },
      (error) => console.log(error),
      () => console.log('this.data.book\n' + JSON.stringify(this.data.book) + '\nthis.data.book_instances\n' + JSON.stringify(this.data.book_instances)));
    });
  }

  NavigateToDelete(book: Book) {
    const id = this.route.snapshot.params['id'];
    console.log(id);
    this.router.navigate([`/catalog/book/${id}/delete`]);
  }

  NavigateToUpdate(bookDetail: Book) {
    const id = this.route.snapshot.params['id'];
    console.log(id);
    this.router.navigate([`/catalog/book/${id}/update/`]);
  }
}
