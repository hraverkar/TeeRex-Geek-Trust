import { CartService } from '../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ITData } from 'src/app/interface/itdata';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  constructor(private _cartService: CartService) { }
  public cartProductList: ITData[] = [];
  public totalPrice: string = null;
  public totalItems: number = 0;
  ngOnInit(): void {
    this.cartProductList = this._cartService.getQuestionData();
    this.calcTotalPrice();
    this.calcTotal();
  }

  modelChanged(product: ITData) {
    // if (this.product.num === 0) {
    //   this.productRemoved.emit(this.product);
    // }
  }

  calcTotalPrice() {
    this.totalPrice = this.cartProductList.reduce((acc, pr) => acc += pr.price * pr.num, 0).toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
    return this.totalPrice;
  }

  calcTotal() {
    this.totalItems = this.cartProductList.reduce((acc, prod) => acc += prod.num, 0);
    return this.totalItems;
  }

}
