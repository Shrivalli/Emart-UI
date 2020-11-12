import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms'
import {Router} from "@angular/router"
import {Seller} from 'src/app/Models/seller';

import { SellerService } from 'src/app/Services/seller.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  viewprofileform:FormGroup;
  submitted=false;
  seller:Seller;
  list:Seller[];
  constructor(private formbuilder:FormBuilder,private route:Router,private service:SellerService) { 
    if(localStorage.getItem("sid"))
    {
      
    }
    else{
      this.route.navigateByUrl("/home/login");
    }
  }
  ngOnInit() {
    this.viewprofileform=this.formbuilder.group({
      sid:[''],
      sname:['',[Validators.required,Validators.pattern("^[a-z]{5}$")]],
      scompany:['',Validators.required],
      postalAddress:['',Validators.required],
      gstin:['',Validators.required],
      briefAboutCompany:['',Validators.required],
      sno:['',[Validators.required,
      Validators.pattern("^[6-9][0-9]{9}$")]],
      semail:['',[Validators.required,Validators.email]],
      spwd:['',[Validators.required,Validators.pattern("^[A-Z]{7}[@,#,$,%,&,*]$")]],
      
    });
    this.viewprofile();
  }
  viewprofile()
  {
        let sid=Number(localStorage.getItem("sid"));
        // let sid=1;
        // alert("hi");
      this.service.getsellerprofile(sid).subscribe(res=>{this.seller=res;
      console.log(this.seller)
      this.viewprofileform.patchValue({
         sid:this.seller.sid,
        sname:this.seller.sname,
        scompany:this.seller.scompany,
       postalAddress:this.seller.postalAddress,
       gstin:this.seller.gstin,
       briefAboutCompany:this.seller.breifAboutCompany,      
       sno:this.seller.sno,
       semail:this.seller.semail,
       spwd:this.seller.spwd

      } );
      console.log(this.seller);
    });
  }
  

  get f(){return this.viewprofileform.controls;}
  
  onSubmit()
  {
    this.submitted= true;
    this.seller.sid=this.viewprofileform.value["sid"];
      this.seller.sname=this.viewprofileform.value["sname"];
      this.seller.scompany=this.viewprofileform.value["scompany"];
      this.seller.postalAddress=this.viewprofileform.value["postalAddress"];
      this.seller.gstin=this.viewprofileform.value["gstin"];
      this.seller.breifAboutCompany=this.viewprofileform.value["briefAboutCompany"];
      this.seller.sno=this.viewprofileform.value["sno"];
      this.seller.semail=this.viewprofileform.value["semail"];
      this.seller.spwd=this.viewprofileform.value["spwd"];
      console.log(this.seller)
      this.service.editsellerprofile(this.seller).subscribe(res=>
        {
          this.seller=res;
          console.log('Successfully edited');
        },err=>{console.log(err)}
  
        )

  //display form value on success
  

    alert("Success");
    this.route.navigateByUrl('home/login');
}
}