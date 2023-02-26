import { Component } from '@angular/core';
import { Author } from '../Models/AuthorModel';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AuthorDetails } from '../Models/AuthorDetailsModel';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent {
  //zeby nie inicjowac jest declare
  declare authorDetails: AuthorDetails;

  constructor(private _apiService:ApiService, private route: ActivatedRoute){}

  ngOnInit():void{
    this.getData();
  }

  getData():void{
    const authorName = this.route.snapshot.paramMap.get('slug');
    this._apiService.getData(`https://wolnelektury.pl/api/authors/${authorName}/`).subscribe(res=>{
      this.authorDetails = res;
    })
  }

  title = "Author Details"
}
