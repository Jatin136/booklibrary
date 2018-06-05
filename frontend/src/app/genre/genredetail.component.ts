import { Component, OnInit } from '@angular/core';
import { GenreService } from './genre.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-genredetail',
  templateUrl: './genredetail.component.html'
})
export class GenredetailComponent implements OnInit {

  genreDetails: any;

  constructor(private genre: GenreService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        const id = params.get('id');
        console.log(id);
        this.genre.getGenreDetail(id).subscribe((result: any) => {
          this.genreDetails = result;
        },
        error => console.log(error),
        () => console.log('completed fetching genre detail ' + JSON.stringify(this.genreDetails)));
      }
    );
  }

}
