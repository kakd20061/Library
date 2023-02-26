import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Author } from '../Models/AuthorModel';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {

  authorList: Author[] = [];
  constructor(private _apiService:ApiService){}

  ngOnInit():void{
    this.getData();
  }

  getData():void{
    this._apiService.getData("https://wolnelektury.pl/api/authors/").subscribe(res=>{
      this.authorList = res;
    })
  }
  title = "Authors"
}
