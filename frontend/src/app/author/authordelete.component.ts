import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Author } from '../models/author';
import { AuthorService } from './author.service';

@Component({
  selector: 'app-authordelete',
  templateUrl: './authordelete.component.html'
})
export class AuthordeleteComponent implements OnInit {

  id;
  authorDetail;

  constructor(private route: ActivatedRoute, private author: AuthorService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        const id = params.get('id');
        console.log(id);
        this.author.deleteAuthorGet(id).subscribe((result: any) => {
          this.authorDetail = result;
        },
        error => {console.log(error); this.router.navigate([`/catalog/authors`]); },
        () => console.log('completed fetching author detail ' + JSON.stringify(this.authorDetail)));
      }
    );
  }

  DeleteAuthor() {
    this.author.deleteAuthorPost(this.authorDetail.author._id).subscribe((result: any) => {
      this.authorDetail = result;
    },
    error => {console.log(error); this.router.navigate([`/catalog/authors`]); },
    () => { console.log('completed fetching author detail ' + JSON.stringify(this.authorDetail))), this.router.navigate([`/catalog/authors`]); }
  }

}
