import { Component, OnInit } from '@angular/core';
import { AuthorService } from './author.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Author } from '../models/author';

@Component({
  selector: 'app-authordetail',
  templateUrl: './authordetail.component.html'
})
export class AuthordetailComponent implements OnInit {

  authorDetail: any;

  constructor(private author: AuthorService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        const id = params.get('id');
        console.log(id);
        this.author.getAuthorDetail(id).subscribe((result: any) => {
          this.authorDetail = result;
        },
        error => console.log(error),
        () => console.log('completed fetching author detail ' + JSON.stringify(this.authorDetail)));
      }
    );
  }

  NavigateToDelete(author: Author) {
    const id = this.route.snapshot.params['id'];
    console.log(id);
    this.router.navigate([`/catalog/author/${id}/delete`]);
  }

  NavigateToUpdate(authorDetail: Author) {
    const id = this.route.snapshot.params['id'];
    console.log(id);
    this.router.navigate([`/catalog/author/${id}/update/`]);
  }
}
