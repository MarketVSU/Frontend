import { FormGroup, FormControl, Validators,FormBuilder,AbstractControl} from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Item} from '../сlasses/item'

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


    setValues(item:Item)
    {
        this.myForm.setValue({
            name:item.Name,
            imageurl:item.PicturePath,
            price:item.Price,
            description:item.Description
          },{onlySelf:true});
    }

    getMyForm()
    {
        return this.myForm;
    }

    sendInformation(colors:String[],sizes:String[])
    {
        const body = {
            Name:this.myForm.value.name, 
            PicturePath: this.myForm.value.imageurl,
            Price:this.myForm.value.price,
            Description:this.myForm.value.description,
            Color:colors[0],
            Sizes:sizes,
          
        };

        console.log(body);
        return this.http.post(this.baseUrl+"/CreateNewItem",body)
    }


    editItem()
    {
        const body = {
            Name:this.myForm.value.name, 
            PicturePath: this.myForm.value.imageurl,
            Price:this.myForm.value.price,
            Description:this.myForm.value.description,
        };

        return this.http.put(this.baseUrl+"/Update",body)
    }
}