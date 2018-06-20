import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenreService } from './genre.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Genre } from '../models/genre';

@Component({
  selector: 'app-creategenre',
  templateUrl: './creategenre.component.html',
  styleUrls: ['./creategenre.component.css']
})
export class CreategenreComponent implements OnInit {

  genreForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private genre: GenreService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.genreForm = this.fb.group({
      name: ['', Validators.required ]
    });
  }

  ngOnInit() {
  }

  CreateGenre() {
    console.log('form submitted successfully');

    const genre = new Genre();
    genre.name = this.genreForm.get('name').value;

    this.genre.createGenrePost(genre).subscribe((data) => {
      console.log(data);
      },
      error => console.log(error),
      () => { console.log('genre created successfully'), this.router.navigate([`/catalog/genres`]); }
    );
  }
}
