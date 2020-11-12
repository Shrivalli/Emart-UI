import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {Subcategory} from 'src/app/Models/subcategory';
import { AdminService } from 'src/app/Services/admin.service';
@Component({
  selector: 'app-viewsubcategory',
  templateUrl: './viewsubcategory.component.html',
  styleUrls: ['./viewsubcategory.component.css']
})
export class ViewsubcategoryComponent implements OnInit {
  itemform:FormGroup;
  item:Subcategory;
  submitted:false;
  list:Subcategory[];
    constructor(private builder:FormBuilder,private service:AdminService) {
      this.service.Getsubcategory().subscribe(res=>{
        this.list=res;
        console.log(this.list);
      },err=>{
  
      }
      )
     }
  
    ngOnInit() {
      this.itemform=this.builder.group({
        scid:[''],
        sname:[''],
        scdetails:[''],
        gst:[''],
        cid:['']
      })
    }
    get f() { return this.itemform.controls; }
    Update(){
      this.item= new Subcategory();
      this.item.scid=Number(this.itemform.value['scid'])
      this.item.sname=this.itemform.value['sname']
      this.item.cid=Number(this.itemform.value['cid'])
      this.item.scdetails=this.itemform.value['scdetails']
      this.item.gst=this.itemform.value['gst']
      this.service.updatesubcategory(this.item).subscribe(res=>{
        this.item=res;
        console.log(this.item);
        console.log("updated successfully");
      })

    }
    viewsubprofile(scid:number){
      this.service.GetSubCategorybyid(scid).subscribe(  
        res=>{this.item=res
          console.log(this.item)
         console.log(this.item.sname)
      this.itemform.setValue({  
      scid:Number(this.item.scid),
      gst:this.item.gst,
      cid:Number(this.item.cid),
      sname:this.item.sname,
      scdetails:this.item.scdetails,
    
    })
  
   } );
  
  }
    
  

    onReset() {
        this.submitted = false;
        this.itemform.reset();
    }
  
   Delete(scid:any)
   {
      
     this.service.DeletesubCategory(scid).subscribe(res=>{
       console.log('record deleted');
  
   },err=>{
      console.log(err);
   }
    )
   }
  }