import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthorService } from './author.service';
import { Author } from '../models/author';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createauthor',
  templateUrl: './createauthor.component.html'
})
export class CreateauthorComponent implements OnInit {

  authorForm: FormGroup;

  // authorForm = new FormGroup({
  //   first_name: new FormControl(),
  //   family_name: new FormControl(),
  //   date_of_birth: new FormControl(),
  //   date_of_death: new FormControl()
  // });

  constructor(private fb: FormBuilder, private author: AuthorService, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.authorForm = this.fb.group({
      first_name: [ '', Validators.required ],
      family_name: [ '', Validators.required ],
      date_of_birth: '',
      date_of_death: ''
    });
  }

  ngOnInit() {
  }

  CreateAuthor() {
    console.log('form submitted successfuly');

    const author = new Author();
    author.first_name = this.authorForm.get('first_name').value;
    author.family_name = this.authorForm.get('family_name').value;
    author.date_of_birth = this.authorForm.get('date_of_birth').value;
    author.date_of_death = this.authorForm.get('date_of_death').value;

    this.author.createAuthor(author).subscribe((data) => {
      console.log(data);
    },
    error => console.log(error),
    () => { console.log('author created successfully'), this.router.navigate([`/catalog/authors`]); }
    );
  }

}
