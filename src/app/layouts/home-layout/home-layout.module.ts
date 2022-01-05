import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeLayoutRoutes } from './home-layout.routing';
import { HomeComponent } from '../../home/home.component';
//import { UserProfileComponent } from '../../user-profile/user-profile.component';
//import { TableListComponent } from '../../table-list/table-list.component';
//import { TypographyComponent } from '../../typography/typography.component';
//import { IconsComponent } from '../../icons/icons.component';
//import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
//import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {NewUserComponent } from '../../new-user/new-user.component';
import {LoginComponent } from '../../login/login.component';
import { StorageService } from "../../../services/storage.service";
//import {ProductsComponent } from '../../products/products.component';
//import {NewProductComponent } from '../../new-product/new-product.component';

//import { CarritocomprasComponent } from '../../carritocompras/carritocompras.component';
//import { CartComponent } from '../../cart/cart.component';
//import { CheckoutDialog } from '../../checkout/checkout.component';
//CarritocomprasComponent,
    //CartComponent,
    //CheckoutDialog

import { ShoppingCartService } from '../../../services/shopping-cart.service';

import { MaterialModule } from '../../material/material.module';
import { LoginService } from "../../../services/login.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomeLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MaterialModule
  ],
  declarations: [
    HomeComponent,
   // UserProfileComponent,
    NewUserComponent,
   // NewProductComponent,
    LoginComponent,
    //ProductsComponent,
    //TableListComponent,
    //TypographyComponent,
    //IconsComponent,
    //MapsComponent,
    NotificationsComponent,
    //UpgradeComponent,
    //CarritocomprasComponent,
    //CartComponent,
   // CheckoutDialog
  ],
  providers: [StorageService, ShoppingCartService, LoginService]


})

export class HomeLayoutModule {}
