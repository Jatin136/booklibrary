import { Component, OnInit } from '@angular/core';
import { BookinstanceService } from './bookinstance.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-bookinstancedetail',
  templateUrl: './bookinstancedetail.component.html'
})
export class BookinstancedetailComponent implements OnInit {

  bookinstancedetail: any;

  constructor(private bookinstance: BookinstanceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        const id = params.get('id');
        console.log(id);
        this.bookinstance.getBookInstanceDetail(id).subscribe((result: any) => {
          this.bookinstancedetail = result;
        },
        error => console.log(error),
        () => console.log('completed fetching book instance detail ' + JSON.stringify(this.bookinstancedetail)));
      }
    );
  }

}
