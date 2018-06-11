import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from './author.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

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
        },
        error => {console.log(error); this.router.navigate([`/catalog/authors`]); },
        () => console.log('completed fetching author detail ' + JSON.stringify(this.authorDetail)));
      }
    );
  }

}
