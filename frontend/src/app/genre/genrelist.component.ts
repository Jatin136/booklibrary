import { Component, OnInit } from '@angular/core';
import { GenreService } from './genre.service';

@Component({
  selector: 'app-genrelist',
  templateUrl: './genrelist.component.html'
})
export class GenrelistComponent implements OnInit {

  genres;

  constructor(private genre: GenreService) { }

  ngOnInit() {
    this.genre.getGenreList().subscribe(
      (genreList: any) => {
        this.genres = genreList;
      },
      error => console.log(error),
      () => console.log('completed fetching genre list ' + JSON.stringify(this.genres))
    );

  }

}
