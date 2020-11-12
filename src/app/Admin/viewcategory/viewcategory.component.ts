import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {Category} from 'src/app/Models/category';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-viewcategory',
  templateUrl: './viewcategory.component.html',
  styleUrls: ['./viewcategory.component.css']
})
export class ViewcategoryComponent implements OnInit {
itemform:FormGroup;
item:Category;
submitted:false;
list:Category[];
  constructor(private builder:FormBuilder,private service:AdminService) {
    this.service.Getcategory().subscribe(res=>{
      this.list=res
      console.log(this.list)
    },err=>{

    }
    )
   }

  ngOnInit() {
    this.itemform=this.builder.group({
      cid:['',[Validators.required,Validators.pattern("^[0-9]$")]],
      cname:['',Validators.required],
      cdetails:['',Validators.required],
    })
  }
  get f() { return this.itemform.controls; }

 
  Edit(){
    //this.item=new Category();
     this.item.cid=Number(this.itemform.value['cid'])
     this.item.cname=this.itemform.value['cname']
   this.item.cdetails=this.itemform.value['cdetails']
    // console.log(this.item);
    this.service.updatecategory(this.item).subscribe(res=>{
      this.item=res
      console.log(this.item)
    console.log("updated successfully");
   } )


  }
  viewprofile(cid:number){
    this.service.GetCategorybyid(cid).subscribe(  
      res=>{this.item=res
        console.log(this.item)
        console.log(this.item.cname)
    this.itemform.setValue({  
    cid:Number(this.item.cid),
    cname:this.item.cname,
    cdetails:this.item.cdetails,
  
  })

 });

}
  onReset() {
      this.submitted = false;
      this.itemform.reset();
  }

 Delete(cid:any)
 {
    
   this.service.DeleteCategory(cid).subscribe(res=>{
     console.log('record deleted');

 },err=>{
    console.log(err);
 }
  )
} 

}


