import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';
import{Buyer} from '../Models/buyer';
import {Seller} from '../Models/seller';
const Requestheaders={headers:new HttpHeaders({
  'content-type':'application/json',
  'Authorization': 'Bearer '+localStorage.getItem('token')
})}
@Injectable({
  providedIn: 'root'
})
export class UserService {
url:string="http://localhost:58157/Account/"

  constructor(private http:HttpClient) { }
  public BLogin(bname:string,password:string):Observable<any>{
    return this.http.get<any>(this.url+'BLogin/'+bname+'/'+password,Requestheaders);
  }
  
  public SLogin(sname:string,password:string):Observable<any>{
    return this.http.get<any>(this.url+'SLogin/'+sname+'/'+password,Requestheaders);
  }
  public BRegister(Buyer:Buyer):Observable<any>{
    return this.http.post<any>(this.url+'BRegister',JSON.stringify(Buyer),Requestheaders);
  }
  public SRegister(seller:Seller):Observable<any>{
    return this.http.post<Seller>(this.url+'SRegister',JSON.stringify(seller),Requestheaders);
  }
}
