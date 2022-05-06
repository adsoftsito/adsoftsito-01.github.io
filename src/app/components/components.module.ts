import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { StorageService } from 'services/storage.service';
//import { CheckoutDialog } from '../checkout/checkout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    HomeNavbarComponent,
   // CheckoutDialog
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    HomeNavbarComponent
  ],
  providers : [StorageService]
})
export class ComponentsModule { }
