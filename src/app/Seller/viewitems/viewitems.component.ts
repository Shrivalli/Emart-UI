import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import {Items} from 'src/app/Models/items';
import {Router} from "@angular/router"
import {UserService} from 'src/app/services/user.service';
import {Seller} from 'src/app/Models/seller';
import { ItemService } from 'src/app/Services/item.service';
@Component({
  selector: 'app-viewitems',
  templateUrl: './viewitems.component.html',
  styleUrls: ['./viewitems.component.css']
})
export class ViewitemsComponent implements OnInit {
itemForm:FormGroup;
submitted=false;
  list:Items[];
  item:Items;
  seller:Seller;
  imagepath:string;
  isShow:boolean=true;
  constructor(private builder:FormBuilder,private route:Router,private service:ItemService) {
    if(localStorage.getItem("sid"))
    {
      
    }
    else{
      this.route.navigateByUrl("/home/login");
    }
    let sid=Number(localStorage.getItem("sid"));
    this.service.ViewItems(sid).subscribe(res=>{
      this.list=res;
      console.log(this.list);
    },err=>{
      console.log(err)
    })
   }
    
   ngOnInit() {
    this.itemForm=this.builder.group({
      // sid:[''],
      iid:[''],
      cid:[''],
      scid:[''],
      sid:[''],
      remarks:[''],
      description:[''],
    price:[''],
    itemName:[''],
    stockNo:[''],
    imagepath:['']
  
    });
    this.ViewItems();
  }
  ViewItems()
{ 
  this.service.GetAll().subscribe(res=>
    {
      this.list=res;
      console.log(this.list);
    },
    err=>{
      console.log(err);
    });
}

Search1(){
  this.isShow=!this.isShow;
}
 Search(iid:number)
{
  this.Search1();
  // this.isShow=!this.isShow;
  this.service.getItem(iid).subscribe(res=>{
    this.item=res;
    console.log(this.item);
    this.itemForm.setValue({
      iid:this.item.iid,
      itemName:this.item.itemName,
      price:this.item.price,
      stockNo:this.item.stockNo,
      cid:this.item.cid,
      scid:this.item.scid,
      sid:this.item.sid,
    description:this.item.description,
    remarks:this.item.remarks,
    imagepath:this.item.imagepath
  
    })
  })
}
 
  Update()
  
  {
    this.item=new Items();
    this.item.iid=Number(this.itemForm.value["iid"]);
   this.item.cid=Number(this.itemForm.value["cid"]);
    this.item.scid=Number(this.itemForm.value["scid"]);
    this.item.itemName=this.itemForm.value["itemName"];
    this.item.price=this.itemForm.value["price"];
    this.item.description=this.itemForm.value["description"];
    this.item.stockNo=Number(this.itemForm.value["stockNo"]);
    this.item.remarks=this.itemForm.value["remarks"];
    this.item.sid=Number(this.itemForm.value["sid"]);
    this.item.imagepath=this.imagepath
    console.log(this.item);
    this.service.updateitem(this.item).subscribe(res=>
      {
        console.log('record updated');
      },
      err=>{
        console.log(err);
      })
    }
  Delete(iid:any){
   
    this.service.Deleteitem(iid).subscribe(res=>{
      console.log('Record deleted');
    },
    err=>{
      console.log(err);
    })
  }
  fileEvent(event){
    this.imagepath=event.target.files[0].name;
  }

}