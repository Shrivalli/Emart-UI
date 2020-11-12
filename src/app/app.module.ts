import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { BuyerComponent } from './buyer/buyer.component';
// import { SellerComponent } from './seller/seller.component';
// import { AdminComponent } from './admin/admin.component';
import { BuyerLandingpageComponent } from './Buyer/buyer-landingpage/buyer-landingpage.component';
import { SearchComponent } from './Buyer/search/search.component';
import { PurchasehistoryComponent } from './Buyer/purchasehistory/purchasehistory.component';
import { BuyproductComponent } from './Buyer/buyproduct/buyproduct.component';
import { ViewcartComponent } from './Buyer/viewcart/viewcart.component';

import { SlandingpageComponent } from './Seller/slandingpage/slandingpage.component';
import { AdditemsComponent } from './Seller/additems/additems.component';
import { ViewitemsComponent } from './Seller/viewitems/viewitems.component';
import { ViewreportsComponent } from './Seller/viewreports/viewreports.component';
import { LandingpageComponent } from './Admin/landingpage/landingpage.component';
import { BUsellerComponent } from './Admin/buseller/buseller.component';
import { BUbuyerComponent } from './Admin/bubuyer/bubuyer.component';
import { AddcategoryComponent } from './Admin/addcategory/addcategory.component';
import { SubcategoryComponent } from './Admin/subcategory/subcategory.component';
import { DailyreportsComponent } from './Admin/dailyreports/dailyreports.component';
import { HomeComponent } from './Account/home/home.component';
import { LoginComponent } from './Account/login/login.component';
import { BuyerRegisterComponent } from './Account/buyer-register/buyer-register.component';
import { SellerRegisterComponent } from './Account/seller-register/seller-register.component';
import { EditprofileComponent } from './Buyer/editprofile/editprofile.component';
import { ViewProfileComponent } from './Seller/view-profile/view-profile.component';
import { ViewcategoryComponent } from './Admin/viewcategory/viewcategory.component';
import { ViewsubcategoryComponent } from './Admin/viewsubcategory/viewsubcategory.component';
import { ContactUSComponent } from './Account/contact-us/contact-us.component';
import { AboutUsComponent } from './Account/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    // BuyerComponent,
    // SellerComponent,
    // AdminComponent,
    BuyerLandingpageComponent,
    SearchComponent,
    PurchasehistoryComponent,
    BuyproductComponent,
    ViewcartComponent,
    
    SlandingpageComponent,
    AdditemsComponent,
    ViewitemsComponent,
    ViewreportsComponent,
    LandingpageComponent,
    BUsellerComponent,
    BUbuyerComponent,
    AddcategoryComponent,
    SubcategoryComponent,
    DailyreportsComponent,
    HomeComponent,
    LoginComponent,
    BuyerRegisterComponent,
    SellerRegisterComponent,
    EditprofileComponent,
    ViewProfileComponent,
    ViewcategoryComponent,
    ViewsubcategoryComponent,
    ContactUSComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
