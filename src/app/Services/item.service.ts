import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Items } from '../Models/items';
const Requestheaders={headers:new HttpHeaders({
  'content-type':'application/json',
  'Authorization': 'Bearer '+localStorage.getItem('token')
})}
@Injectable({
  providedIn: 'root'
})
export class ItemService {
url:string="http://localhost:58157/Item/"
  constructor(private http:HttpClient) { }

  public Additem(items:Items):Observable<Items>{
    return this.http.post<Items>(this.url+'AddItem',JSON.stringify(items),Requestheaders);
  }
  public getItem(iid:Number):Observable<Items>
  {
    return this.http.get<Items>(this.url+'getitem/'+iid,Requestheaders);
  }
  public ViewItems(sid:Number):Observable<any>
  {
    return this.http.get<Items>(this.url+'ViewItems/'+sid,Requestheaders);
  }
  public Deleteitem(iid:Number):Observable<Items>
  {
    return this.http.delete<Items>(this.url+'Deleteitem/'+iid,Requestheaders);
  }
  public updateitem(Item:Items):Observable<Items>
  {
    return this.http.put<Items>(this.url+'updateitem/',JSON.stringify(Item),Requestheaders);
  }
  public GetAll():Observable<Items[]>
   {
     return this.http.get<Items[]>(this.url+'GetItems')
   }
   
  

}
