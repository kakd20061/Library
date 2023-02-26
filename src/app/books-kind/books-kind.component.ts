import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../Models/BookModel';

@Component({
  selector: 'app-books-kind',
  templateUrl: './books-kind.component.html',
  styleUrls: ['./books-kind.component.css']
})
export class BooksKindComponent {
  bookList:Book[] = [];
  genreList:string[] = [];
  authorName:any = this.route.snapshot.paramMap.get('author_slug');
  kindName:any = this.route.snapshot.paramMap.get('kind_slug')
  constructor(private _apiService: ApiService, private route:ActivatedRoute){}

  ngOnInit():void{
    this.getData();
  }

  getData():void{

    this._apiService.getData(`https://wolnelektury.pl/api/authors/${this.authorName}/kinds/${this.kindName}/books/`).subscribe(res=>{
      this.bookList = res;
      this.bookList.forEach(element => {
        if(!this.genreList.includes(element.genre.normalize("NFD").replace(/[\u0300-\u036f]/g, "")) && !element.genre.includes(","))
        {
          let el = element.genre;
          el = el.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

          console.log(el);
          this.genreList.push(el);
        }
      });
    })
  }
}
