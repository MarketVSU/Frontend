import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { SigninComponent } from './signin/signin.component';
import {Routes, RouterModule} from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { CreateNewItemComponent } from './admin/create-new-item/create-new-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { AllItemsComponent } from './all-items/all-items.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ProductPageComponent } from './product-page/product-page.component'; 

const appRoutes: Routes =[
  { path: 'registration', component:RegistrationComponent},
  { path: 'addNew', component:CreateNewItemComponent},
  { path: 'all', component:AllItemsComponent},
   { path: 'product', component:ProductPageComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SigninComponent,
    CreateNewItemComponent,
    AllItemsComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCheckboxModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
