import { Component, OnInit } from '@angular/core';
import {Item} from '../сlasses/item';
import {CartItem} from '../сlasses/cartItem'
import {Subscription} from 'rxjs'
import { ActivatedRoute} from '@angular/router'
import {ItemService} from '../services/item.service'
import {CreateService} from '../services/createItem.service'

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
  providers:[ItemService,CreateService]
})

export class ProductPageComponent implements OnInit {

  public item:Item;
  public id;
  subscription:Subscription;
  constructor( private activateRoute: ActivatedRoute,
    private service:ItemService,
    private service2:CreateService) { }

  ngOnInit() {

    this.subscription=this.activateRoute.params.subscribe(params=>{
      this.id=params['id'];
      console.log(this.id)
     // this.getItemById(this.id);
      
    } 
  );

    this.item=new Item();
    this.item.Id=1;
    this.item.Description='Идею данной футболки поймет любой айтишник. Это интерпретация логотипа «GitHub» под логотип одного из самых известных сайтов для взрослых.';
    this.item.Name='Мужская футболка хлопок «GitHub»';
    this.item.Price=1111;
    this.item.PicturePath='https://storage.vsemayki.ru/images/0/1/1909/1909039/previews/people_4_manshort_front_lavender_500.jpg'
    
  }

  editProduct()
  {
    this.service2.setValues(this.item);
  }

  getItemById(id)
  {
    this.service.getItemById(id)
      .subscribe(
        (data:Item)=>this.item=data,
        error=>console.log(error)
      )
  }

  editItem()
  {
    this.service2.editItem()
      .subscribe(
        (data)=>{},
        error=>console.log(error)
      )
  }


  close()
  {
    this.getItemById(this.id);
  }

  addInCart()
  {
    let itemsInCart:CartItem[]=[];
    let cartitem:CartItem=new CartItem();
    cartitem.item=this.item;
    cartitem.count=1;
    cartitem.size="XXL";
    itemsInCart=JSON.parse(localStorage.getItem ("itemsInCart"));
    if(itemsInCart==undefined)
        itemsInCart=[]
    itemsInCart.push(cartitem);
    localStorage.setItem("itemsInCart", JSON.stringify(itemsInCart));
    console.log(itemsInCart);
  }

}
