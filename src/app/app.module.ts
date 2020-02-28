import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ItemListComponent } from './eMart/item/item-list/item-list.component';
import { ItemDisplayComponent } from './eMart/item/item-display/item-display.component';
import { CartListComponent } from './eMart/cart/cart-list/cart-list.component';
import { BillViewComponent } from './eMart/bill/bill-view/bill-view.component';
import { BillListComponent } from './eMart/bill/bill-list/bill-list.component';
import { LoginComponent } from './eMart/user/login/login.component';
import { SellerSignupComponent } from './eMart/user/seller-signup/seller-signup.component';
import { BuyerSignupComponent } from './eMart/user/buyer-signup/buyer-signup.component';

@NgModule({
  declarations: [
    AppComponent,
   
    ItemListComponent,
    ItemDisplayComponent,
    CartListComponent,
    BillViewComponent,
    BillListComponent,
    LoginComponent,
    SellerSignupComponent,
    BuyerSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
