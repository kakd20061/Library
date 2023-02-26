import { Component } from '@angular/core';
import { Book } from '../Models/BookModel';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  bookList:Book[] = [];

  constructor(private _apiService:ApiService, private route:ActivatedRoute){}

  ngOnInit():void{
    this.getData();
  }

  getData():void{
    const authorName = this.route.snapshot.paramMap.get('book_slug');
    this._apiService.getData(`https://wolnelektury.pl/api/authors/${authorName}/books/`).subscribe(res=>{
      this.bookList = res;
    })
  }
}
