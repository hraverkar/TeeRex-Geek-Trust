import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '', component: HomeComponent
},
{
  path: 'home', component: HomeComponent
},
{
  path: 'cart', component: ShoppingCartComponent
}]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
