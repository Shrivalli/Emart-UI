import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'app-viewreports',
  templateUrl: './viewreports.component.html',
  styleUrls: ['./viewreports.component.css']
})
export class ViewreportsComponent implements OnInit {

  constructor(private route:Router) { 
    if(localStorage.getItem("sid"))
    {
      
    }
    else{
      this.route.navigateByUrl("/home/login");
    }
  }

  ngOnInit() {
  }

}
