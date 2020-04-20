import { FormGroup, FormControl, Validators,FormBuilder,AbstractControl} from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class CreateService
{
    baseUrl:String='http://localhost:8888';
    constructor(private fb:FormBuilder,private http:HttpClient) {}
    myForm=this.fb.group(
        {
            "name":["",[Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
            "imageurl":["",[Validators.required]],
            "price": ["",[Validators.required]],
            "description": ["",[Validators.required]],
        }
    );

    getMyForm()
    {
        return this.myForm;
    }
}