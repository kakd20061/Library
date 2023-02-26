import { Component } from '@angular/core';
import { BookDetails } from '../Models/BookDetailsModel';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  declare bookDetails: BookDetails;

  constructor(private _apiService:ApiService, private route: ActivatedRoute){}

  ngOnInit():void{
    this.getData();
  }

  getData():void{
    const title = this.route.snapshot.paramMap.get('book_details_slug');
    console.log(title);
    this._apiService.getData(`https://wolnelektury.pl/api/books/${title}/`).subscribe(res=>{
      this.bookDetails = res;
    })
  }

  title = "Book details"
}
