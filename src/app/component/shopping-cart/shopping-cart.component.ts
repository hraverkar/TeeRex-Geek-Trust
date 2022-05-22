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

  modelChanged(data: any, article: ITData) {
    article.num = data;
    this.calcTotalPrice();
    this.calcTotal();
    if (article.num === 0) {
      let index = this.cartProductList.findIndex(i=>i.id === article.id);
      this.cartProductList.splice(index, 1);
    }
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
