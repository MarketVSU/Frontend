import { Component, OnInit } from '@angular/core';
import {CreateService} from '../../services/createItem.service'

@Component({
  selector: 'app-create-new-item',
  templateUrl: './create-new-item.component.html',
  styleUrls: ['./create-new-item.component.scss'],
  providers:[CreateService]
})
export class CreateNewItemComponent implements OnInit {

  constructor(private service:CreateService) { }

  S = false;
  M = false;
  XXL=false;
  XXXL=false;
  ngOnInit() {
  }

  onSubmit(){}

}
