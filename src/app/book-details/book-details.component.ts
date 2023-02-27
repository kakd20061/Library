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
  bookDetails: BookDetails = {} as BookDetails;
  authorName: string = "";
  epochName: string = "";
  genreName: string = "";
  kindName: string = "";
  bookTitle:any = this.route.snapshot.paramMap.get('book_details_slug');
  constructor(private _apiService:ApiService, private route: ActivatedRoute){}

  ngOnInit():void{
    this.getData();
  }

  getData():void{
    this._apiService.getData(`https://wolnelektury.pl/api/books/${this.bookTitle}/`).subscribe(res=>{
      this.bookDetails = res;
      this.authorName=this.bookDetails.authors[0].slug;
      this.epochName=this.bookDetails.epochs[0].name;
      this.genreName=this.bookDetails.genres[0].name;
      this.kindName=this.bookDetails.kinds[0].name;

    })
  }
}
