import { FormGroup, FormControl, FormBuilder,AbstractControl} from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';


@Injectable()

export class SignInService
{
    baseUrl:String='http://localhost:8888';

    constructor(private fb:FormBuilder,private http: HttpClient) {}
    signInForm=this.fb.group(
        {
            "userEmail": [""],
            "userPassword":[""]
        }
    );
    getSignInForm(){
        return this.signInForm;
    }

   sendData()
   {
	   let body={
				userName:this.signInForm.value.userEmail,
				password:this.signInForm.value.userPassword
			};

        console.log(body)
        return this.http.post(this.baseUrl+'/SignIn',body);
   }

}