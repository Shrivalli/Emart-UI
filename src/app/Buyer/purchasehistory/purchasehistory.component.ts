import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup} from'@angular/forms';
import {Router} from "@angular/router";
import { Transaction } from 'src/app/Models/transaction';
import { BuyerService } from 'src/app/Services/buyer.service';

@Component({
  selector: 'app-purchasehistory',
  templateUrl: './purchasehistory.component.html',
  styleUrls: ['./purchasehistory.component.css']
})
export class PurchasehistoryComponent implements OnInit {
list:Transaction;

  constructor(private service:BuyerService,private route:Router) {
    if(localStorage.getItem("bid"))
    {
      
    }
    else{
      this.route.navigateByUrl("/home/login");
    }
    let bid=Number(localStorage.getItem("bid"));
    this.service.transactionhistory(bid)
    .subscribe(res=>{
      this.list=res;
      console.log(this.list);
    })
   }

  ngOnInit() {
  }

}
