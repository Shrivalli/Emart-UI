import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/Models/items';
import {Router} from '@angular/router'
import { BuyerService } from 'src/app/Services/buyer.service';
import { Cart } from 'src/app/Models/cart';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {
//list:Cart;
clist:Cart[];
items:Items;
count:number;


  constructor(private service:BuyerService,private router:Router) {
    if(localStorage.getItem("bid"))
    {
      
    }
    else{
      this.router.navigateByUrl("/home/login");
    }
   // let bid=Number(localStorage.getItem("bid"));
    this.service.Getcart(2).subscribe(res=>{
     this.clist=res;
      console.log(res);
    })
   }
   Remove(cartid:number){
  let id=cartid;
    alert("deleted")
    console.log(cartid);
    this.service.deletefromcart(cartid).subscribe(res=>{
     
      console.log('Item Removed from Cart');
      
    })
  }
  ngOnInit() {
  } 
}
  


