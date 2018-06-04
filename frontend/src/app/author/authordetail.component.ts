import { Component, OnInit } from '@angular/core';
import { AuthorService } from './author.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-authordetail',
  templateUrl: './authordetail.component.html'
})
export class AuthordetailComponent implements OnInit {

  authorDetail: any;

  constructor(private author: AuthorService, private route: ActivatedRoute) { }

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
}
