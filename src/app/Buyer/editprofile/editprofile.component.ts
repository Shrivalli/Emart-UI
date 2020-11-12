import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms'
import {Router} from "@angular/router";
import {Buyer} from 'src/app/Models/buyer';
import { BuyerService } from 'src/app/Services/buyer.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  buyerregisterform:FormGroup;
  submitted=false;
  list:Buyer[];
  buyer:Buyer;
  constructor(private formbuilder:FormBuilder,private route:Router,private service:BuyerService) {
    if(localStorage.getItem("bid"))
    {
      
    }
    else{
      this.route.navigateByUrl("/home/login");
    }
   }

  ngOnInit()
   {
    this.buyerregisterform=this.formbuilder.group({
      bid:[''],
      bname:[''],
      bdate:[''],
      
      bno:[''],
      bemail:[''],
      bpwd:[''],
    });
    this.viewbuyerprofile();                                                                                                                                                                                 
  }
  viewbuyerprofile(){
    let bid=Number(localStorage.getItem("bid"));
        
      this.service.getprofile(bid).subscribe(res=>{this.buyer=res;
      console.log(this.buyer)
      this.buyerregisterform.patchValue({
         bid:this.buyer.bid,
        bname:this.buyer.bname,
        bemail:this.buyer.bemail,
      bno:this.buyer.bno,
       bdate:this.buyer.bdate,
       bpwd:this.buyer.bpwd
       
  });
  console.log(this.buyer);
});
  }
  get f(){return this.buyerregisterform.controls;}
  onSubmit()
  {
    this.submitted= true;
    this.buyer.bid=this.buyerregisterform.value["bid"];
      this.buyer.bname=this.buyerregisterform.value["bname"];
      this.buyer.bemail=this.buyerregisterform.value["bemail"];
      this.buyer.bno=this.buyerregisterform.value["bno"];
      this.buyer.bdate=this.buyerregisterform.value["bdate"];
      this.buyer.bpwd=this.buyerregisterform.value["bpwd"];
      console.log(this.buyer)
      this.service.editprofile(this.buyer).subscribe(res=>
        {
          this.buyer=res;
          console.log('Successfully edited');
        },err=>{console.log(err)}
  
        )

      alert("Success")
      this.route.navigateByUrl('home/login');
    
      // console.log(JSON.stringify(this.buyerregisterform.value));
      
}
  }

