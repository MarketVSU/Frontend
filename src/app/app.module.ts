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
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { OrderRegistrationComponent } from './order-registration/order-registration.component';
import { OrderCartComponent } from './order-registration/order-cart/order-cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FiltersComponent } from './filters/filters.component'; 
import {MatExpansionModule} from '@angular/material/expansion';
import { UserPageComponent } from './user-page/user-page.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { OrderCardComponent } from './admin/order-card/order-card.component'
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import {AuthInterceptor} from './Auth/auth.interceptor';
import { ActivatePageComponent } from './activate-page/activate-page.component';
import { ItemComponent } from './all-items/item/item.component';
import { OrderCompletePageComponent } from './order-complete-page/order-complete-page.component'

const appRoutes: Routes =[
  { path: 'registration', component:RegistrationComponent},
  {path:'signin',component:SigninComponent},
  { path: 'addNew', component:CreateNewItemComponent},
  { path: 'all', component:AllItemsComponent},
  { path: 'product/:id', component:ProductPageComponent},
  {path:'cart',component:CartComponent},
  {path:'orderRegistration',component:OrderRegistrationComponent},
  {path:'',component:HomePageComponent},
  {path:'userPage',component:UserPageComponent},
  {path:'orders',component:OrdersComponent},
  {path:"activate",component:ActivatePageComponent},
  {path:"orderComplete",component:OrderCompletePageComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SigninComponent,
    CreateNewItemComponent,
    AllItemsComponent,
    ProductPageComponent,
    CartComponent,
    CartItemComponent,
    OrderRegistrationComponent,
    OrderCartComponent,
    NavbarComponent,
    HomePageComponent,
    FiltersComponent,
    UserPageComponent,
    OrdersComponent,
    OrderCardComponent,
    ActivatePageComponent,
    ItemComponent,
    OrderCompletePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCheckboxModule,
    MatCardModule,
    ReactiveFormsModule,
    MatExpansionModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
