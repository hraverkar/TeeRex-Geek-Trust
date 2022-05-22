import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public listOfProduct: any;
  constructor() { }

  public publishListOfProduct(listOfProduct: any) {
    this.listOfProduct = listOfProduct;
    console.log(this.listOfProduct, 'publish');
  }

  public getQuestionData() {
    console.log(this.listOfProduct, 'get');
    return this.listOfProduct;
  }
}
