import { Component, OnInit } from '@angular/core';
import {User} from '../сlasses/user'
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  user:User;
  constructor() { }

  ngOnInit() {
    this.user=new User();
    this.user.id=1;
    this.user.firstName="Armen";
    this.user.lastName="Tovmasyan";
    this.user.email="armentovmasyan@gmail.com";
    this.user.telephoneNumber="+79204473470"
    }

}
