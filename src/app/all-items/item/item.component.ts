import { Component, OnInit,Input} from '@angular/core';
import {Item} from '../../сlasses/item'


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item:Item
  constructor() { }

  ngOnInit() {
    console.log(this.item)
  }

}
