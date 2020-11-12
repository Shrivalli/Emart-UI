import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms'
import {Router} from "@angular/router"
import {Buyer} from 'src/app/Models/buyer';
import{ Seller} from 'src/app/Models/seller';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-seller-register',
  templateUrl: './seller-register.component.html',
  styleUrls: ['./seller-register.component.css']
})
export class SellerRegisterComponent implements OnInit {
  sellerregistrationform:FormGroup;
  submitted=false;
  
  seller:Seller;
  list:Seller[];
  constructor(private formbuilder:FormBuilder,private route:Router,private service:UserService) { }

  ngOnInit() {
    this.sellerregistrationform=this.formbuilder.group({
     // sid:['',[Validators.required,Validators.pattern("^[0-9]$")]],
      sname:['',[Validators.required,Validators.pattern("^[a-z]{5}$")]],
      scompany:['',Validators.required],
      postalAddress:['',Validators.required],
      gstin:['',Validators.required],
      briefAboutCompany:['',Validators.required],
      sno:['',[Validators.required,
      Validators.pattern("^[6-9][0-9]{9}$")]],
      semail:['',[Validators.required,Validators.email]],
      spwd:['',[Validators.required,Validators.pattern("^[A-Z]{7}[@,#,$,%,&,*]$")]],

    })
  }
  get f(){return this.sellerregistrationform.controls;}
  onSubmit()
  {
    this.submitted= true;
    if(this.sellerregistrationform.valid){
    this.seller=new Seller();
    this.seller.sid=Math.round(Math.random()*1000);
    this.seller.sname=this.sellerregistrationform.value["sname"];
    this.seller.sno=this.sellerregistrationform.value["sno"];
    this.seller.semail=this.sellerregistrationform.value["semail"];
    this.seller.spwd=this.sellerregistrationform.value["spwd"];
    this.seller.scompany=this.sellerregistrationform.value["scompany"];
    this.seller.postalAddress=this.sellerregistrationform.value["postaladdress"];
    this.seller.gstin=(this.sellerregistrationform.value["gstin"]);
    this.seller.breifAboutCompany=this.sellerregistrationform.value["briefAboutCompany"];
    
    console.log(this.seller)
    this.service.SRegister(this.seller).subscribe(res=>{
      console.log('Registration Successfull');

    },err=>{console.log(err)}
    )
    //display form value on success
    
      alert("Success")
      console.log(JSON.stringify(this.sellerregistrationform.value));
      
    }
  }

  }



 
