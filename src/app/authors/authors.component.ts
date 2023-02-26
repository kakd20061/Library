import { Component, ViewChild} from '@angular/core';
import { ApiService } from '../api.service';
import { Author } from '../Models/AuthorModel';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})

export class AuthorsComponent {
  @ViewChild(MatPaginator) declare paginator: MatPaginator;
  private authorList: Author[] = [];
  authorResultList: Author[] = [];
  searchText: string = "";
  private pageSize:number = 3;
  resultLength: number = 0;
  elementIndex:number=0;


  constructor(private _apiService:ApiService){}

  ngOnInit():void{
    this.getData();
  }

  setPage(index: number) {
    this.paginator.pageIndex = index;
  }

  getData():void{
    this._apiService.getData("https://wolnelektury.pl/api/authors/").subscribe(res=>{
      let id: number = 1;
      this.authorList = res;
      this.authorList.forEach(element => {
        element.id = id;
        id++;
      });
      this.authorResultList = this.authorList.slice(0, 3);
      this.resultLength = this.authorList.length;
    })
  }
  
  OnPageChange(event: PageEvent):void
  {
    if(this.searchText.trim().length > 0)
    {
      this.authorResultList = [];
      this.authorList.forEach(element => {
        if(element.name.toLowerCase().startsWith(this.searchText.toLowerCase()))
        {
          this.authorResultList.push(element);
        }
      });

      const startIndex = event.pageIndex * event.pageSize;
      let endIndex = startIndex + event.pageSize;

      this.pageSize = event.pageSize;

      if(endIndex > this.resultLength)
      {
        endIndex = this.resultLength;
      }

      this.resultLength = this.authorResultList.length;
      this.authorResultList = this.authorResultList.slice(startIndex, endIndex)
    }
    else
    {
      this.pageSize = event.pageSize;
      const startIndex = event.pageIndex * event.pageSize;
      let endIndex = startIndex + event.pageSize;
      if(endIndex > this.authorList.length)
      {
        endIndex = this.authorList.length;
      }
      this.authorResultList = this.authorList.slice(startIndex,endIndex);
      this.resultLength = this.authorList.length;
    }
  }

  searchData():void
  {
    if(this.searchText.trim().length > 0)
    {
      this.authorResultList = []
      this.authorList.forEach(element => {
        if(element.name.toLowerCase().startsWith(this.searchText.toLowerCase()))
        {
          this.authorResultList.push(element);
        }
      });
      this.resultLength = this.authorResultList.length;
      this.authorResultList = this.authorResultList.slice(0, this.pageSize)
      this.setPage(0);
    }
    else
    {
      this.authorResultList = this.authorList.slice(0, this.pageSize);
      this.resultLength = this.authorList.length;
      this.setPage(0);
    }
  }

  title = "Authors"
}
