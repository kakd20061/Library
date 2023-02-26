import { Component } from '@angular/core';
import { Book } from '../Models/BookModel';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books-genre',
  templateUrl: './books-genre.component.html',
  styleUrls: ['./books-genre.component.css']
})
export class BooksGenreComponent {
  bookList:Book[] = [];
  authorName:any = this.route.snapshot.paramMap.get('author_slug');
  kindName:any = this.route.snapshot.paramMap.get('kind_slug');
  constructor(private _apiService: ApiService, private route:ActivatedRoute){}

  ngOnInit():void{
    this.getData();
  }

  getData():void{
    
    const genreName = this.route.snapshot.paramMap.get('genre_slug');
    this._apiService.getData(`https://wolnelektury.pl/api/authors/${this.authorName}/kinds/${this.kindName}/genres/${genreName}/books/`).subscribe(res=>{
      this.bookList = res;
    })
  }
}
