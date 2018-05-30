import { Component, OnInit } from '@angular/core';
import { AuthorService } from './author.service';

@Component({
  selector: 'app-authorlist',
  templateUrl: './authorlist.component.html'
})
export class AuthorlistComponent implements OnInit {

  authorList;
  constructor(private author: AuthorService) { }

  ngOnInit() {
    this.author.getAuthorList().subscribe(
      (authorList: any) => {
        this.authorList = authorList;
      },
      error => console.log(error),
      () => console.log('Completed fetching author list ' + JSON.stringify(this.authorList.author_list))
    );
  }

}
