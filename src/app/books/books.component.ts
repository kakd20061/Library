import { Component, ViewChild } from '@angular/core';
import { Book } from '../Models/BookModel';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  @ViewChild(MatPaginator) declare paginator: MatPaginator;
  searchText: string = "";
  private pageSize:number = 3;
  resultLength: number = 0;
  elementIndex:number=0;
  authorName:any = this.route.snapshot.paramMap.get('book_slug');
  bookList:Book[] = [];
  bookResultList:Book[] = [];

  kindList:string[] = [];

  constructor(private _apiService:ApiService, private route:ActivatedRoute){}

  ngOnInit():void{
    this.getData();
  }

  setPage(index: number) {
    this.paginator.pageIndex = index;
  }
  
  OnPageChange(event: PageEvent):void
  {
    if(this.searchText.trim().length > 0)
    {
      this.bookResultList = [];
      this.bookList.forEach(element => {
        if(element.title.toLowerCase().startsWith(this.searchText.toLowerCase()))
        {
          this.bookResultList.push(element);
        }
      });

      const startIndex = event.pageIndex * event.pageSize;
      let endIndex = startIndex + event.pageSize;

      this.pageSize = event.pageSize;

      if(endIndex > this.resultLength)
      {
        endIndex = this.resultLength;
      }

      this.resultLength = this.bookResultList.length;
      this.bookResultList = this.bookResultList.slice(startIndex, endIndex)
    }
    else
    {
      this.pageSize = event.pageSize;
      const startIndex = event.pageIndex * event.pageSize;
      let endIndex = startIndex + event.pageSize;
      if(endIndex > this.bookList.length)
      {
        endIndex = this.bookList.length;
      }
      this.bookResultList = this.bookList.slice(startIndex,endIndex);
      this.resultLength = this.bookList.length;
    }
  }

  searchData():void
  {
    if(this.searchText.trim().length > 0)
    {
      this.bookResultList = []
      this.bookList.forEach(element => {
        if(element.title.toLowerCase().startsWith(this.searchText.toLowerCase()))
        {
          this.bookResultList.push(element);
        }
      });
      this.resultLength = this.bookResultList.length;
      this.bookResultList = this.bookResultList.slice(0, this.pageSize)
      this.setPage(0);
    }
    else
    {
      this.bookResultList = this.bookList.slice(0, this.pageSize);
      this.resultLength = this.bookList.length;
      this.setPage(0);
    }
  }
  getData():void{
    this._apiService.getData(`https://wolnelektury.pl/api/authors/${this.authorName}/books/`).subscribe(res=>{
      this.bookList = res;
      this.bookList.forEach(element => {
        if(!this.kindList.includes(element.kind) && !element.kind.includes(","))
        {
          this.kindList.push(element.kind);
        }
      });
      this.bookResultList = this.bookList.slice(0, 3);
      this.resultLength = this.bookList.length;
    })
  }
}
