import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bookinstanceitem',
  template: `
    <a href="/catalog/bookinstance/{{bookinstance._id}}"> {{bookinstance.book.title}} : {{bookinstance.imprint}} </a>
    <span class="text-success"> - {{bookinstance.status}}</span>
    <span *ngIf='bookinstance.status != "Available"'> (Due: {{bookinstance.due_back | date}})</span>
  `
})
export class BookinstanceitemComponent implements OnInit {
  @Input() bookinstance: any;

  constructor() { }

  ngOnInit() {
  }

}
