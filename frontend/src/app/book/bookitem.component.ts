import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-book-items',
  template: `
    <a href="/catalog/book/{{book._id}}"> {{book.title}} </a> ({{book.author.first_name}} {{book.author.family_name}})
  `,
})
export class BookItemComponent {
  @Input() book: any;
}
