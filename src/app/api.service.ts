import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from './Models/AuthorModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }

  getData(url:string){
    return this._http.get<any>(`${url}`);
  }
}
