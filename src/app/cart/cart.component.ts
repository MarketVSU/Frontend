import { Component, OnInit } from '@angular/core';
import {Item} from '../сlasses/item';
import { CartItem } from '../сlasses/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor() { }

  allItems:CartItem[]=[]
  ngOnInit() {

    this.allItems = JSON.parse(localStorage.getItem ("itemsInCart"));
    console.log(this.allItems);
  }

  getTotalPrice()
  {
    let totalPrice=0;
    for(let i=0;i<this.allItems.length;i++)
    {
      totalPrice+=this.allItems[i].count * this.allItems[i].item.Price
    }
    return totalPrice;
  }

}
