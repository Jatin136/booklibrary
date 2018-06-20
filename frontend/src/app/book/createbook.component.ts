import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { BookService } from './book.service';

@Component({
  selector: 'app-createbook',
  templateUrl: './createbook.component.html'
})
export class CreatebookComponent implements OnInit {

  id;
  bookDetail;

  constructor(private route: ActivatedRoute, private router: Router, private book: BookService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      console.log(id);
      this.book.bookCreateGet().subscribe((result: any) => {
        this.bookDetail = result;
      },
      error => { console.log(error), this.router.navigate([`/catalog/books`]); },
      () => console.log('completed fetching book detail ' + JSON.stringify(this.bookDetail)));
    );
    });
  }

}
