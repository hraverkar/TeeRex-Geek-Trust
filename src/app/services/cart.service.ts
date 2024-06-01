import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartNumberSubject = new BehaviorSubject<number>(null);
  public cartNumber$ = this.cartNumberSubject.asObservable();

  public listOfProduct: any;
  constructor() {}

  public publishListOfProduct(listOfProduct: any) {
    this.listOfProduct = listOfProduct;
    console.log(this.listOfProduct, 'publish');
  }

  public getQuestionData() {
    console.log(this.listOfProduct, 'get');
    return this.listOfProduct;
  }

  public getupdatedCardData(value: number) {
    this.cartNumberSubject.next(value);
  }
}
