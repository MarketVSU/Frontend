import { Component, OnInit } from '@angular/core';
import {CartItem} from '../../сlasses/cartItem'

@Component({
  selector: 'app-order-cart',
  templateUrl: './order-cart.component.html',
  styleUrls: ['./order-cart.component.scss']
})
export class OrderCartComponent implements OnInit {

  cartItems:CartItem[];
  constructor() { }

  ngOnInit() {
    this.cartItems=JSON.parse(localStorage.getItem ("itemsInCart"));
  }


  totalPriceForItem(item)
  {
    console.log(item)
    let cartItem:CartItem=this.cartItems.find(i=>i.item.Id==item.item.Id);
    return cartItem.count * cartItem.item.Price
  }

  totalPrice()
  {
    let total=0;
    this.cartItems.forEach(i=>total+=i.count * i.item.Price)
    return total
  }
}
