import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private _cartService: CartService) {}

  public cartItemNumber: number;
  ngOnInit(): void {
    this.getUpdateCardData();
  }
  public getUpdateCardData() {
    this._cartService.cartNumber$.subscribe((res: number) => {
      if (res !== null) {
        this.cartItemNumber = res;
      }
    });
  }
}
