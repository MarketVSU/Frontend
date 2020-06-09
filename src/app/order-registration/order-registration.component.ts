import { Component, OnInit } from '@angular/core';
import {CartItem} from '../сlasses/cartItem';

@Component({
  selector: 'app-order-registration',
  templateUrl: './order-registration.component.html',
  styleUrls: ['./order-registration.component.scss']
})
export class OrderRegistrationComponent implements OnInit {

 
  pochta=true;
  curier=false;
  nal=true;
  online=false;
  constructor() { }
  ngOnInit() {
  }

  setPochtaTrue()
  {
    this.curier=false;
    this.pochta=true;
  }

  setCurierTrue()
  {
    this.curier=true;
    this.pochta=false;
  }

  setNalTrue()
  {
    this.online=false;
    this.nal=true;
  }

  setOnlineTrue()
  {
    this.online=true;
    this.nal=false;
  }


}
