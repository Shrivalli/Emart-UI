import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/Models/category';
import { AdminService } from 'src/app/Services/admin.service';
@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
addcategoryform:FormGroup;
submitted=false;
list:Category[];
category:Category;


  constructor(private formbuilder:FormBuilder,private service:AdminService ) { }

  ngOnInit() {
    this.addcategoryform=this.formbuilder.group({
      cid:['',Validators.required],
      cname:['',Validators.required],
      cdetails:['',Validators.required],
    })
  }
get f(){return this.addcategoryform.controls;}
onSubmit(){
  this.submitted=true;
  this.category=new Category();

  this.category.cid=Math.round(Math.random()*1000);
  this.category.cname=this.addcategoryform.value["cname"];
  this.category.cdetails=this.addcategoryform.value["cdetails"];
  this.service.AddCategory(this.category).subscribe(res=>{
    this.category=res;
    console.log(res);
    console.log('Record added')
  },err=>{
    console.log(err)
  
  }
  )
 
    //  alert("Success");
    // console.log(JSON.stringify(this.addcategoryform.value));
  }
}



