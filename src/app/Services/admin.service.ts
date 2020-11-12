import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from "Rxjs";
import {Category} from '../Models/category';
import{Subcategory} from '../Models/subcategory'; 
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
  'Authorization': 'Bearer '+localStorage.getItem('token')
})}
@Injectable({
  providedIn: 'root'
})
export class AdminService {
url:string='http://localhost:58157/Admin/'
  constructor(private http:HttpClient) {}
  public AddCategory(category:Category):Observable<any>
    {
      return this.http.post(this.url+'AddCategory/',JSON.stringify(category),Requestheaders)
    }
    public AddSubCategory(subcategory:Subcategory):Observable<any>
    {
      return this.http.post(this.url+'AddSubCategory/',JSON.stringify(subcategory),Requestheaders)
    }
    // public viewcategory(list:)
    public Getcategory():Observable<Category[]>
    {
      return this.http.get<Category[]>(this.url+'getcategory')
    }
    public updatecategory(category:Category):Observable<Category>
    {
      return this.http.put<Category>(this.url+'updatecategory/',JSON.stringify(category),Requestheaders);
    }
    public DeleteCategory(cid:Number):Observable<Category>
    {
      return this.http.delete<Category>(this.url+'DeleteCategory/'+cid,Requestheaders);
    }
    public Getsubcategory():Observable<Subcategory[]>
    {
      return this.http.get<Subcategory[]>(this.url+'Getsubcategory')
    }
    public DeletesubCategory(scid:Number):Observable<Subcategory>
    {
      return this.http.delete<Subcategory>(this.url+'Deletesubcategory/'+scid,Requestheaders);
    }
    public updatesubcategory(subcategory:Subcategory):Observable<Subcategory>
    {
      return this.http.put<Subcategory>(this.url+'updatesubcategory/',JSON.stringify(subcategory),Requestheaders);
      
    }
    public GetCategorybyid(cid:number):Observable<any>
    {
      return this.http.get<any>(this.url+'getcategory/'+cid,Requestheaders)
    }
    
    public GetSubCategorybyid(scid:number):Observable<any>
    {
      return this.http.get<any>(this.url+'getsubcategory/'+scid,Requestheaders)
    }
}

