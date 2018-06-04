import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BooklistComponent } from './book/booklist.component';
import { BookItemComponent } from './book/bookitem.component';
import { BookdetailComponent } from './book/bookdetail.component';
import { AuthorlistComponent } from './author/authorlist.component';
import { AuthoritemComponent } from './author/authoritem.component';
import { GenrelistComponent } from './genre/genrelist.component';
import { GenreitemComponent } from './genre/genreitem.component';
import { BookinstancesComponent } from './bookinstances/bookinstances.component';
import { BookinstanceitemComponent } from './bookinstances/bookinstanceitem.component';
import { CreateauthorComponent } from './author/createauthor.component';
import { CreategenreComponent } from './genre/creategenre.component';
import { CreatebookComponent } from './book/createbook.component';
import { CreatebookinstanceComponent } from './bookinstances/createbookinstance.component';
import { AuthordetailComponent } from './author/authordetail.component';

const appRoutes: Routes = [
  { path: '', component: BookComponent},
  { path: 'catalog', component: BookComponent },
  { path: 'catalog/books', component: BooklistComponent },
  { path: 'catalog/authors', component: AuthorlistComponent },
  { path: 'catalog/genres', component: GenrelistComponent },
  { path: 'catalog/bookinstances', component: BookinstancesComponent },
  { path: 'catalog/bookinstance/create', component: CreatebookinstanceComponent },
  { path: 'catalog/book/create', component: CreatebookComponent },
  { path: 'catalog/book/:id', component: BookdetailComponent },
  { path: 'catalog/author/create', component: CreateauthorComponent },
  { path: 'catalog/author/:id', component: AuthordetailComponent },
  { path: 'catalog/genre/create', component: CreategenreComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooklistComponent,
    BookItemComponent,
    BookdetailComponent,
    AuthorlistComponent,
    AuthoritemComponent,
    GenrelistComponent,
    GenreitemComponent,
    BookinstancesComponent,
    BookinstanceitemComponent,
    CreateauthorComponent,
    CreategenreComponent,
    CreatebookComponent,
    CreatebookinstanceComponent,
    AuthordetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
