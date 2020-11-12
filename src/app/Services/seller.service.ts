import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from "Rxjs";

import { Seller } from '../Models/seller';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
  'Authorization': 'Bearer '+localStorage.getItem('token')
})}


@Injectable({
  providedIn: 'root'
})
export class SellerService {
  url:string='http://localhost:58157/Seller/';
  constructor(private http:HttpClient) {

   }
   public editsellerprofile(item:Seller):Observable<any>
    {
      return this.http.put<Seller>(this.url+'editsellerprofile',JSON.stringify(item),Requestheaders)
    }
    
    public getsellerprofile(sid:number):Observable<any>
    {
      return this.http.get<any>(this.url+'getprofile/'+sid,Requestheaders);
    }
}
