import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-authoritem',
  template: `
    <a href="/catalog/author/{{author._id}}">{{author.family_name}}, {{author.first_name}} </a> ({{author.date_of_birth | date: "longDate"}} - {{author.date_of_death | date:"longDate"}})
  `
})
export class AuthoritemComponent implements OnInit {

  @Input() author: any;

  constructor() { }

  ngOnInit() {
  }

}
