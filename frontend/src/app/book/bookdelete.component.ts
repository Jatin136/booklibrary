import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BookService } from './book.service';

@Component({
  selector: 'app-bookdelete',
  templateUrl: './bookdelete.component.html'
})
export class BookdeleteComponent implements OnInit {

  bookDetail;
  constructor(private route: ActivatedRoute, private book: BookService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        const id = params.get('id');
        console.log(id);
        this.book.bookDeleteGet(id).subscribe((result: any) => {
          this.bookDetail = result;
        },
        error => {console.log(error); this.router.navigate([`/catalog/books`]); },
        () => console.log('completed fetching book detail ' + JSON.stringify(this.bookDetail)));
      }
    );
  }

  // DeleteAuthor() {
  //   this.author.deleteAuthorPost(this.authorDetail.author._id).subscribe((result: any) => {
  //     this.authorDetail = result;
  //   },
  //   error => {console.log(error); this.router.navigate([`/catalog/authors`]); },
  //   () => { console.log('completed fetching author detail ' + JSON.stringify(this.authorDetail)), this.router.navigate([`/catalog/authors`]); });
  // }

  Cancel() {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        const id = params.get('id');
        console.log(id);
        this.router.navigate([`/catalog/book/${id}`]);
      }
    )
  }

}
