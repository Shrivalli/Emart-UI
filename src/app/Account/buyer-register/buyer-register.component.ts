import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms'
import {Router} from "@angular/router"
import {from} from 'rxjs';
import {Buyer} from 'src/app/Models/buyer';
import{ Seller} from 'src/app/Models/seller';
import { UserService } from 'src/app/Services/user.service';



@Component({
  selector: 'app-buyer-register',
  templateUrl: './buyer-register.component.html',
  styleUrls: ['./buyer-register.component.css']
})
export class BuyerRegisterComponent implements OnInit {
  buyerregisterform:FormGroup;
  submitted=false;
  
  Buyer:Buyer;
  list:Buyer[];
  
  constructor(private formbuilder:FormBuilder,private route:Router,private service:UserService) { }

  ngOnInit()
   {
    this.buyerregisterform=this.formbuilder.group({
      // BuyerId:['',[Validators.required,Validators.pattern("^[0-9]$")]],
      bname:['',[Validators.required,Validators.pattern("^[a-z]{5}$")]],
      bdate:['',Validators.required],
      
      bno:['',[Validators.required,
              Validators.pattern("^[6-9][0-9]{9}$")]],
      bemail:['',[Validators.required,Validators.email]],
      bpwd:['',[Validators.required,Validators.pattern("^[A-Z]{7}[@,#,$,%,&,*]$")]],
    })                                                                                                                                                                                      
  }
  get f(){return this.buyerregisterform.controls;}
  onSubmit()
  {
    this.submitted= true;

    //display form value on success
    this.Buyer=new Buyer();
   this.Buyer.bid=Math.round(Math.random()*1000);
   this.Buyer.bname=this.buyerregisterform.value["bname"];
   this.Buyer.bemail=this.buyerregisterform.value["bemail"];
   this.Buyer.bdate=this.buyerregisterform.value["bdate"];
   this.Buyer.bno=this.buyerregisterform.value["bno"];
   this.Buyer.bpwd=this.buyerregisterform.value["bpwd"];
   console.log(this.Buyer)
   this.service.BRegister(this.Buyer).subscribe(res=>{
     console.log('Registration Successfull');

   },err=>{console.log(err)}
   )

      alert("Success")
      console.log(JSON.stringify(this.buyerregisterform.value));
      
  }
    }

  



 



