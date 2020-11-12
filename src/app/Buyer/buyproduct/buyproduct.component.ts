import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Items} from 'src/app/Models/items'; 
import {Transaction} from 'src/app/Models/transaction';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BuyerService } from 'src/app/Services/buyer.service';
@Component({
  selector: 'app-buyproduct',
  templateUrl: './buyproduct.component.html',
  styleUrls: ['./buyproduct.component.css']
})
export class BuyproductComponent implements OnInit {
item:Items;
submitted:false;
transaction:Transaction;
buyproductform:FormGroup;

  constructor(private formbuilder:FormBuilder,private router:Router,private service :BuyerService) {
    if(localStorage.getItem("bid"))
    {
      
    }
    else{
      this.router.navigateByUrl("/home/login");
    }
   }

  ngOnInit() {
    this.buyproductform=this.formbuilder.group({
itemName:[''],
transactiontype:[''],
cardNumber:[''],
CVV:[''],
ed:[''],
name:[''],
Tid:[''],
sid:[''],
noofitems:[''],
// iid:[''],
datetime:[''],
    })
    
    this.view();
  }
  view(){
    this.item=JSON.parse(localStorage.getItem('item1'));
    console.log(this.item);
   // console.log(this.item.iid);
    this.buyproductform.patchValue({
        itemName:this.item.itemName
  })
}
purchase(){
 // this.submitted=true;
this.transaction=new Transaction();
this.transaction.sid=this.item.sid;
this.transaction.iid=this.item.iid;

this.transaction.noofitems=Number(this.buyproductform.value["noofitems"]);
this.transaction.bid=Number(localStorage.getItem("bid"));
this.transaction.datetime=this.buyproductform.value["datetime"];
this.transaction.Tid=Math.round(Math.random()*1000);
this.transaction.transactiontype=this.buyproductform.value["transactiontype"];
this.transaction.remarks=this.buyproductform.value["remarks"];
console.log(this.transaction);
this.service.purchase(this.transaction).subscribe(res=>{
  alert(" Transaction successfull");
  this.router.navigateByUrl('buyer-landingpage/purchasehistory');
},err=>{console.log(err)}
)
}

}
