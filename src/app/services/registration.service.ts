import { FormGroup, FormControl, Validators,FormBuilder,AbstractControl} from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class RegistrationService
{
    baseUrl:String='http://localhost:8888';
    constructor(private fb:FormBuilder,private http:HttpClient) {}
    myForm=this.fb.group(
        {
            "userName":["",[Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
            "userSurname":["",[Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
            "userEmail": ["",[Validators.required,Validators.email]],
            "userTelephone":["",[Validators.required]],
            "Passwords":this.fb.group({
                            "password":["",[Validators.required,Validators.minLength(0),Validators.maxLength(15)]],
                            "confirmPassword":["",[Validators.required,Validators.minLength(0),Validators.maxLength(15)]]
                             },{validator:this.ConfirmPasswordValidator})
        }
        
    );


    ConfirmPasswordValidator(control: AbstractControl){

        const password=control.get("password");
        const confirmPassword=control.get("confirmPassword");
        if(password.value!=confirmPassword.value){		 
            confirmPassword.setErrors({confirm: true });
            }    
        else {
                confirmPassword.setErrors(null);
            }
    }

    getRegForm(): FormGroup  {
        return this.myForm;
    }

    sendRegistrationInformation(){
         
        const body = {
                        Name:this.myForm.value.userName+this.myForm.value.userSurname,
                        Login:this.myForm.value.userEmail,
                        Password:this.myForm.value.Passwords.password,
                        TelephoneNumber:this.myForm.value.userTelephone,
                    };

        console.log(body);
        
       return  this.http.post(this.baseUrl+'/Registration',body);
				 
    }

    sendEditedInformation(){
         
        const body = {
                        Name:this.myForm.value.userName + this.myForm.value.userSurname,
                        TelephoneNumber:this.myForm.value.userTelephone
                      
                    };

        console.log(body);
        
       //return  this.http.post(this.baseUrl+'/editUser',body);
				 
    }
}