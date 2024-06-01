import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITData } from 'src/app/interface/itdata';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnDestroy {
  constructor(
    private _dataService: DataService,
    private _snackbar: SnackbarService,
    private _cartService: CartService
  ) {}
  public teesData: ITData[];
  public getAllDataSubs: Subscription;

  public cartProductList: any[] = [];

  public ngOnInit(): void {
    this.getDisplaytees();
  }
  public getDisplaytees(): void {
    this.getAllDataSubs = this._dataService.getAllData().subscribe(
      (res) => {
        this._cartService.getupdatedCardData(0);
        this.teesData = res.body;
      },
      (error) => {
        this._snackbar.error(error.message, 'Error');
      }
    );
  }

  public onAddCardClick(product: any): void {
    console.log('Add Card Clicked');
    let count = 0;
    // find product by name
    const productExistInCart = this.cartProductList.find(
      ({ id }) => id === product.id
    );
    if (!productExistInCart) {
      this.cartProductList.push({ ...product, num: 1 }); // enhance "porduct" opject with "num" property
      this._cartService.publishListOfProduct(this.cartProductList);
      count = this.cartProductList.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.num;
      }, 0);
      this._cartService.getupdatedCardData(count);
    } else {
      productExistInCart.num += 1;
      count += productExistInCart.num;
      this._cartService.getupdatedCardData(count);
    }
  }

  public ngOnDestroy(): void {
    if (this.getAllDataSubs) {
      this.getAllDataSubs.unsubscribe();
    }
  }
}
