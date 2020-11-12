import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from "Rxjs";
import {Buyer} from 'src/app/Models/buyer';
import { Seller } from '../Models/seller';
import { Category } from '../Models/category';
import { Subcategory } from '../Models/subcategory';
import { Transaction } from '../Models/transaction';
import { Items } from '../Models/items';
import { Cart } from '../Models/cart';

const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
  'Authorization': 'Bearer '+localStorage.getItem('token')
})}
@Injectable({
  providedIn: 'root'
})

export class BuyerService {
  url:string='http://localhost:58157/Buyer/';

  constructor(private http:HttpClient) { }
  public editprofile(item:Buyer):Observable<any>
    {
      return this.http.put<Buyer>(this.url+'editbuyerprofile/',JSON.stringify(item),Requestheaders)
    }
    
    public Getsubcategory(cid:number):Observable<any>
    {
      return this.http.get<any>(this.url+'GetSubCategory/'+cid,Requestheaders)
    }
    public purchase(purchase:Transaction):Observable<any>
    {
      return this.http.post<any>(this.url+'Additem/',JSON.stringify(purchase),Requestheaders);
    }
    public getprofile(bid:number):Observable<any>
    {
      return this.http.get<any>(this.url+'getprofile/'+bid,Requestheaders);
    }
    public search(itemname:string):Observable<Items[]>
    {
      return this.http.get<Items[]>(this.url+'search/'+itemname,Requestheaders);
    }
    public transactionhistory(bid:number):Observable<Transaction>{
      return this.http.get<Transaction>(this.url+'Transactionhistory/'+bid,Requestheaders);
    }
   public Addtocart(cart:Cart):Observable<any>
   {
     return this.http.post<any>(this.url+'addtocart/',JSON.stringify(cart),Requestheaders);
   }
   public deletefromcart(cartid:number):Observable<any>
   {
     return this.http.delete<any>(this.url+'deletefromcart/'+cartid,Requestheaders);
   }
   public Getcart(bid:number):Observable<any>{
    return this.http.get<any>(this.url+'GetCart/'+bid,Requestheaders);
  }
}

