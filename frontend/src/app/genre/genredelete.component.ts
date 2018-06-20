import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { GenreService } from './genre.service';

@Component({
  selector: 'app-genredelete',
  templateUrl: './genredelete.component.html'
})
export class GenredeleteComponent implements OnInit {

  id;
  genreDetail;

  constructor(private route: ActivatedRoute, private router: Router, private genre: GenreService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        const id = params.get('id');
        console.log(id);
        this.genre.deleteGenreGet(id).subscribe((result: any) => {
          this.genreDetail = result;
        },
        error => {console.log(error); this.router.navigate([`/catalog/genres`]); },
        () => console.log('completed fetching genre detail ' + JSON.stringify(this.genreDetail)));
      }
    );
  }

  DeleteGenre() {
    this.genre.deleteGenrePost(this.genreDetail.genre._id).subscribe((result: any) => {
      this.genreDetail = result;
    },
    error => {console.log(error); this.router.navigate([`/catalog/genres`]); },
    () => { console.log('completed fetching genre detail ' + JSON.stringify(this.genreDetail)), this.router.navigate([`/catalog/genres`]); });
  }

  Cancel() {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        const id = params.get('id');
        console.log(id);
        this.router.navigate([`/catalog/genre/${id}`]);
      }
    )
  }
}
