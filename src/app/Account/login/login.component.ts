import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { Buyer } from 'src/app/Models/buyer';
import { Seller } from 'src/app/Models/seller';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import {Token} from 'src/app/Models/token';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform:FormGroup;
token:Token;
 
 buyer:Buyer;
 seller:Seller;
 uname:string;
 password:string;
 message:string;

  submitted=true;
  errormessage:string;
  constructor(private formbuilder:FormBuilder,private route:Router,private service:UserService) {
   
   }

  ngOnInit() {
  this.loginform=this.formbuilder.group({
    uname:['',Validators.required],
    password:['',Validators.required],
    role:['',Validators.required]
  });
  }
  Validate()
  {
    this.buyer=new Buyer();
    this.seller=new Seller();
    let token=new Token();
    let username=this.loginform.value['uname'];
    let password=this.loginform.value['password'];
    let role=this.loginform.value['role'];
    console.log(username,password);
    // alert(username)
    // alert(role)
  if(role=='buyer')
  {
   
  this.service.BLogin(username,password).subscribe(res =>{
    this.token=res;
    console.log( this.token);
    if(this.token.message=='success'){
      localStorage.setItem('token',token.token)
      localStorage.setItem('bid',String(this.token.bid));
     
     this.route.navigateByUrl("/buyer-landingpage")
    }
    else{
      alert("invalid");
    }
  });
  }
  else if(role=='seller')
  {
  this.service.SLogin(username,password).subscribe(res=>{
this.token=res;
console.log(this.token);
    if(this.token.message=='success'){
      localStorage.setItem('token',token.token)
      localStorage.setItem('sid',String(this.token.sid));
      // localStorage.setItem("username",this.seller.username);
      // localStorage.setItem("password",this.seller.password);
      this.route.navigateByUrl("slandingpage")
    }
    else{
      alert("invalid");
    }
  });
  
  }
  if(username=="Admin" && password=="admin")
  {
    this.route.navigateByUrl("landingpage");
   }
  
  // {
  //   alert("No logins founded")
  // }
  }
  
     
}
  
