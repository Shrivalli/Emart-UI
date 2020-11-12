import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {from} from 'rxjs';
import { Items } from 'src/app/Models/items';
import { ItemService } from 'src/app/Services/item.service';
import { AdminService } from 'src/app/Services/admin.service';
import { Category } from 'src/app/Models/category';
import { Subcategory } from 'src/app/Models/subcategory';
import { BuyerService } from 'src/app/Services/buyer.service';

@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.css']
})
export class AdditemsComponent implements OnInit {
  additemform:FormGroup;
  submitted=false;
 clist:Category[];
 slist:Subcategory[];
Items:Items;
imagepath:string;
SelectedFile:File=null;
  constructor(private formbuilder:FormBuilder,private route:Router, private service:ItemService,private services:AdminService,private buyerservice:BuyerService) { 
   
    if(localStorage.getItem("sid"))
    {
      
    }
    else{
      this.route.navigateByUrl("/home/login");
    }
    this.services.Getcategory().subscribe(res=>{
      this.clist=res;
      console.log(this.clist);
    })
  }

  ngOnInit() {
    this.additemform=this.formbuilder.group({
      sid:['',Validators.required],
      iid:['',Validators.required],
       cid:['',Validators.required],
      scid:['',Validators.required],
      price:['',Validators.required],
      stockNo:['',Validators.required],
imagepath:['',Validators.required],
      itemName:['',[Validators.required,Validators.pattern("^[A-Z]{5,10}$")]],
      
      description:['',Validators.required],
      remarks:['',Validators.required],
     
    })
  }
  get f(){return this.additemform.controls;}
  onSubmit()
  {
    this.Items=new Items();
    this.Items.iid=Math.round(Math.random()*1000);
    this.Items.cid=Number(this.additemform.value["cid"]);
    this.Items.scid=Number(this.additemform.value["scid"]);
    this.Items.price=Number(this.additemform.value["price"]);
    this.Items.itemName=this.additemform.value["itemName"];
    this.Items.stockNo=Number(this.additemform.value["stockNo"]);
    this.Items.remarks=this.additemform.value["remarks"];
    this.Items.imagepath=this.imagepath
    this.Items.description=this.additemform.value["description"];
    this.Items.sid=Number(this.additemform.value["sid"]);
    // console.log(this.Items);
    this.service.Additem(this.Items).subscribe(res=>{
      console.log('Items added Successfully');
 
    },err=>{console.log(err)}
    )
    //display form value on success
  
    
      
    }
    GetSubCategory()
    {
      let cid=this.additemform.value["cid"];
      console.log(cid);
      this.buyerservice.Getsubcategory(cid).subscribe(res1=>{
        this.slist=res1;
        console.log(this.slist);
      })
     }
     fileEvent(event){
       this.imagepath=event.target.files[0].name;
     }


  }
