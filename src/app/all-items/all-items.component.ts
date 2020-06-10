import { Component, OnInit } from '@angular/core';
import {Item} from '../сlasses/item'
import {ItemService} from '../services/item.service'

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.scss'],
  providers:[ItemService]

})
export class AllItemsComponent implements OnInit {

  constructor(private service:ItemService) { }

   allItems:Item[]=[]
   ngOnInit() {

    let item=new Item();
    item.Id=1;
    item.Description='Идею данной футболки поймет любой айтишник. Это интерпретация логотипа «GitHub» под логотип одного из самых известных сайтов для взрослых.';
    item.Name='Мужская футболка хлопок «GitHub»';
    item.Price=1111;
    item.PicturePath='https://storage.vsemayki.ru/images/0/1/1909/1909039/previews/people_4_manshort_front_lavender_500.jpg'

    this.allItems.push(item);
    console.log(this.allItems)
  }





}
