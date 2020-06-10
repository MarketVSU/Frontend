import { FormGroup, FormControl, Validators,FormBuilder,AbstractControl} from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class ItemService
{
    baseUrl:String='http://localhost:8888';
    constructor(private fb:FormBuilder,private http:HttpClient) {}

    public getItemById(id)
    {
        return this.http.get(this.baseUrl+"GetItemById/"+id)
    }

    public getAllItems()
    {
        return this.http.get(this.baseUrl+"GetAllItems");
    }
   
}