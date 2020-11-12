import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerLandingpageComponent } from './Buyer/buyer-landingpage/buyer-landingpage.component';
import { BuyproductComponent } from './Buyer/buyproduct/buyproduct.component';
import { PurchasehistoryComponent } from './Buyer/purchasehistory/purchasehistory.component';
import { SearchComponent } from './Buyer/search/search.component';
import { ViewcartComponent } from './Buyer/viewcart/viewcart.component';
import { SlandingpageComponent } from './Seller/slandingpage/slandingpage.component';
import { AdditemsComponent } from './Seller/additems/additems.component';
import { ViewitemsComponent } from './Seller/viewitems/viewitems.component';
import { ViewreportsComponent } from './Seller/viewreports/viewreports.component';
import { AddcategoryComponent } from './Admin/addcategory/addcategory.component';
import { BUbuyerComponent } from './Admin/bubuyer/bubuyer.component';
import { BUsellerComponent } from './Admin/buseller/buseller.component';
import { DailyreportsComponent } from './Admin/dailyreports/dailyreports.component';
import { LandingpageComponent } from './Admin/landingpage/landingpage.component';
import { SubcategoryComponent } from './Admin/subcategory/subcategory.component';
import { HomeComponent } from './Account/home/home.component';
import { LoginComponent } from './Account/login/login.component';
import { BuyerRegisterComponent } from './Account/buyer-register/buyer-register.component';
import { SellerRegisterComponent } from './Account/seller-register/seller-register.component';
import { EditprofileComponent } from './Buyer/editprofile/editprofile.component';
import { ViewProfileComponent } from './Seller/view-profile/view-profile.component';
import { ViewcategoryComponent } from './Admin/viewcategory/viewcategory.component';
import { ViewsubcategoryComponent } from './Admin/viewsubcategory/viewsubcategory.component';
import { AboutUsComponent } from './Account/about-us/about-us.component';
import { ContactUSComponent } from './Account/contact-us/contact-us.component';



const routes: Routes = [
{path:'buyer-landingpage' ,component:BuyerLandingpageComponent,children:[
  {path:'buyproduct',component:BuyproductComponent},
  {path:'purchasehistory',component:PurchasehistoryComponent},
  {path:'search',component:SearchComponent},
  {path:'viewcart',component:ViewcartComponent},
  {path:'editprofile',component:EditprofileComponent},
  
]},
{path:'slandingpage' ,component:SlandingpageComponent,children:[
  {path:'additems',component:AdditemsComponent},
  {path:'viewitems',component:ViewitemsComponent},
 {path:'view-profile',component:ViewProfileComponent},
  {path:'viewreports',component:ViewreportsComponent},
  
]},
{path:'landingpage',component:LandingpageComponent,children:[
{path:'bubuyer',component:BUbuyerComponent},
{path:'buseller',component:BUsellerComponent},
{path:'dailyreports',component:DailyreportsComponent},
{path:'addcategory',component:AddcategoryComponent},
{path:'subcategory',component:SubcategoryComponent},
{path:'viewcategory',component:ViewcategoryComponent},
{path:'viewsubcategory',component:ViewsubcategoryComponent}
]},
{path:'home',component:HomeComponent,children:[
  {path:'login',component:LoginComponent},
  {path:'buyer-register',component:BuyerRegisterComponent},
  {path:'seller-register',component:SellerRegisterComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'contact-us',component:ContactUSComponent}
]},
{path:'',redirectTo:'home' ,pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
