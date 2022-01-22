import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MatDialogModule } from '@angular/material/dialog';
//import { CartComponent } from './cart/cart.component';
/*
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
*/
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';


import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';

import { GraphQLModule } from './graphql.module';
import { CarritocomprasComponent } from './carritocompras/carritocompras.component';
//import { CartComponent } from './cart/cart.component';
import { CheckoutDialog } from './checkout/checkout.component';
//import { LogoutComponent } from './logout/logout.component';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

//CarritocomprasComponent,
    //CartComponent,
    //CheckoutDialog

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    GraphQLModule,
    MatDialogModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    HomeLayoutComponent,
    UserProfileComponent, 
    CarritocomprasComponent,
    //LogoutComponent,
    CheckoutDialog,
   // CartComponent
     


  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CheckoutDialog]

})
export class AppModule { }
