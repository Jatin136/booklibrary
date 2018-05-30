import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BookService } from './book.service';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html'
})
export class BookdetailComponent implements OnInit {

  data: any;

  constructor(private book: BookService, private route: ActivatedRoute) {}

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
}
