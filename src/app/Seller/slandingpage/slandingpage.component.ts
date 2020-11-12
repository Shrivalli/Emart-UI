import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-slandingpage',
  templateUrl: './slandingpage.component.html',
  styleUrls: ['./slandingpage.component.css']
})
export class SlandingpageComponent implements OnInit {
  name:string;
  constructor( private route:Router) {
    if(localStorage.getItem("sid"))
    {
      
    }
    else{
      this.route.navigateByUrl("/home/login");
    }
}


  ngOnInit() {
  }
  public logout()
  {
    localStorage.clear();
    this.route.navigateByUrl("home/login")
  }

}
