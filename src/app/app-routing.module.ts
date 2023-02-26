import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './book-details/book-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/authors', pathMatch: 'full' },
  { path: 'authors', component: AuthorsComponent },
  { path: 'details/:slug', component: AuthorDetailsComponent },
  { path: 'book-details/:book_details_slug', component: BookDetailsComponent },
  { path: 'books/:book_slug', component: BooksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
