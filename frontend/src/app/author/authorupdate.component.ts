import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from './author.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Author } from '../models/author';

@Component({
  selector: 'app-authorupdate',
  templateUrl: './authorupdate.component.html'
})
export class AuthorupdateComponent implements OnInit {

  authorDetail;
  authorForm: FormGroup;

  constructor(private author: AuthorService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    this.updateForm();
  }

  updateForm() {
    this.authorForm = this.fb.group({
      first_name: [ '', Validators.required ],
      family_name: [ '', Validators.required ],
      date_of_birth: '',
      date_of_death: ''
    });
  }

  currentDate() {
    const currentDate = new Date();
    console.log(currentDate.toISOString().substring(0, 10));
    return currentDate.toISOString().substring(0, 10);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        const id = params.get('id');
        console.log(id);
        this.author.updateAuthorGet(id).subscribe((result: any) => {
          this.authorDetail = result;
          this.authorDetail.id = result.author._id;
        },
        error => {console.log(error); this.router.navigate([`/catalog/authors`]); },
        () => console.log('completed fetching author detail ' + JSON.stringify(this.authorDetail)));
      }
    );
  }

  UpdateAuthor(authorDetail: Author) {

    const author = new Author();
    author.first_name = this.authorForm.get('first_name').value || this.authorDetail.author.first_name;
    author.family_name = this.authorForm.get('family_name').value || this.authorDetail.author.family_name;
    author.date_of_birth = this.authorForm.get('date_of_birth').value || this.authorDetail.author.date_of_birth;
    author.date_of_death = this.authorForm.get('date_of_death').value || this.authorDetail.author.date_of_death;

    console.log(author);

    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        author.id = params.get('id');
        console.log(author.id);
        this.author.updateAuthorPost(author).subscribe(
          (result: any) => {this.authorDetail = result; },
          error => {console.log(error); this.router.navigate([`/catalog/authors`]); },
          () => { console.log('completed updating author ' + JSON.stringify(this.authorDetail)); this.router.navigate([`/catalog/authors`]);  });
      }
    );
  }
}
