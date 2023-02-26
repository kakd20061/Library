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
  authorDetailsList: AuthorDetails = {
    name: "",
    url: "",
    sort_key: "",
    description: "",
    description_pl: "",
    plural: "",
    genre_epoch_specific: false,
    adjective_feminine_singular: "",
    adjective_nonmasculine_plural: "",
    genitive: "",
    collective_noun: "",
  }

  constructor(private _apiService:ApiService, private route: ActivatedRoute){}

  ngOnInit():void{
    this.getData();
  }

  getData():void{
    const authorName = this.route.snapshot.paramMap.get('slug');
    this._apiService.getData(`https://wolnelektury.pl/api/authors/${authorName}/`).subscribe(res=>{
      this.authorDetailsList = res;
    })
  }

  title = "Author Details"
}
