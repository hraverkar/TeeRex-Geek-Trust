import { MaterialModule } from './module/material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
