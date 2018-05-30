import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-genreitem',
  template: `
    <a href="/catalog/genre/{{genre._id}}">{{genre.name}} </a>
  `
})
export class GenreitemComponent implements OnInit {

  @Input() genre: any;

  constructor() { }

  ngOnInit() {
  }

}
