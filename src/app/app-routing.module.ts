import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksKindComponent } from './books-kind/books-kind.component';
import { BooksGenreComponent } from './books-genre/books-genre.component';

const routes: Routes = [
  { path: '', redirectTo: '/authors', pathMatch: 'full' },
  { path: 'authors', component: AuthorsComponent },
  { path: 'details/:slug', component: AuthorDetailsComponent },
  { path: 'book-details/:book_details_slug', component: BookDetailsComponent },
  { path: 'books/:book_slug', component: BooksComponent },
  { path: 'books-kind/:author_slug/:kind_slug', component: BooksKindComponent },
  { path: 'books-genre/:author_slug/:kind_slug/:genre_slug', component:  BooksGenreComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
