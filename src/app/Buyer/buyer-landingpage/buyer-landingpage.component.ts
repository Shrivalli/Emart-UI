import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-buyer-landingpage',
  templateUrl: './buyer-landingpage.component.html',
  styleUrls: ['./buyer-landingpage.component.css']
})
export class BuyerLandingpageComponent implements OnInit {
name:string;
  constructor( private route:Router) {
    if(localStorage.getItem("bid"))
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
    sessionStorage.clear();
    this.route.navigateByUrl("home/login")
    
  }

}
