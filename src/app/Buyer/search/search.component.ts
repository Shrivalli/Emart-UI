import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms'
import {Items} from 'src/app/Models/items';
import { BuyerService } from 'src/app/Services/buyer.service';
import { ItemService } from 'src/app/Services/item.service';
import {Router} from '@angular/router'
import { Cart } from 'src/app/Models/cart';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchform:FormGroup;
items:Items;
list:Items[];
cart:Cart;

  constructor(private service:BuyerService,private formbuilder:FormBuilder,private services:ItemService,private router:Router) {
    if(localStorage.getItem("bid"))
    {
      
    }
    else{
      this.router.navigateByUrl("/home/login");
    }
   }

  ngOnInit() {
    this.searchform=this.formbuilder.group({
      itemName:['']
    })
    // this.ViewItems();
  }
  ViewItems()
  { 
    this.services.GetAll().subscribe(res=>
      {
        this.list=res;
        console.log(this.list);
      },
      err=>{
        console.log(err);
      });
  }
  search(){
    this.items=new Items();
    this.items.itemName=this.searchform.value["itemName"];
    this.service.search(this.items.itemName).subscribe(res=>{this.list=res
      
      console.log(this.list);

    },
    err=>{
      console.log(err);
    })
  }
  buy(item2:Items){
    console.log(item2);
    localStorage.setItem('item1',JSON.stringify(item2));
    this.router.navigateByUrl('buyer-landingpage/buyproduct');
  }
  // Add(item:Items){
  //   console.log(item);
  //   localStorage.setItem('item1',JSON.stringify(item));
  //   // 
  //   alert("Item added Successfully")
  // }
  Addtocart(item2:Items){
    console.log(item2);
    let bid=localStorage.getItem('bid');
    this.cart=new Cart();
   this.cart.cartid=Math.round(Math.random()*1000);
   this.cart.iid=item2.iid;
   this.cart.itemName=item2.itemName;
   this.cart.cid=item2.cid;
   this.cart.scid=item2.scid;
   this.cart.sid=item2.sid;
   this.cart.stockNo=item2.stockNo;
   this.cart.price=item2.price;
   this.cart.description=item2.description;

   this.cart.imagepath=item2.imagepath;
   this.cart.bid=Number(bid);
   console.log(this.cart);
   this.service.Addtocart(this.cart).subscribe(res=>{
     console.log("Record added To Cart");
     alert('Item has been Added To Cart');
   })
  }
  }

