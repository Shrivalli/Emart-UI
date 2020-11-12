import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Subcategory} from 'src/app/Models/subcategory';
import { AdminService } from 'src/app/Services/admin.service';
import { Category } from 'src/app/Models/category';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {
  addsubcategoryform:FormGroup;
  submitted=false;
  list1:Subcategory[];
  subcategory:Subcategory;
 clist:Category[];
  constructor(private formbuilder:FormBuilder,private service:AdminService) 
  {
    this.service.Getcategory().subscribe(res=>{
      this.clist=res;
      console.log(this.clist);
    })
  }
  

  ngOnInit() {
    this.addsubcategoryform=this.formbuilder.group({
    scid:['',Validators.required],
      sname:['',Validators.required],
      cid:['',Validators.required],
      gst:['',Validators.required],
      scdetails:['',Validators.required],
    })
  }
  get f(){return this.addsubcategoryform.controls;}
  onSubmit()
  {
    this.submitted= true;

    //display form value on success
    this.subcategory=new Subcategory();
   this.subcategory.cid=Number(this.addsubcategoryform.value["cid"]);
   this.subcategory.sname=this.addsubcategoryform.value["sname"];
   this.subcategory.scdetails=this.addsubcategoryform.value["scdetails"];
   this.subcategory.scid=Math.round(Math.random()*1000);
   this.subcategory.gst=this.addsubcategoryform.value["gst"];
   console.log(this.subcategory)
   this.service.AddSubCategory(this.subcategory).subscribe(res=>{
    alert('Added Successfully');

   },err=>{console.log(err)}
   )

      
      

  }
}
