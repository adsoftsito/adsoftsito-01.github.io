import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
//import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
//import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
//import {NewUserComponent } from '../../new-user/new-user.component';
//import {LoginComponent } from '../../login/login.component';
import { StorageService } from "../../../services/storage.service";
import {ProductsComponent } from '../../products/products.component';
import {NewProductComponent } from '../../new-product/new-product.component';

//import { CarritocomprasComponent } from '../../carritocompras/carritocompras.component';
import { ShoppingCartService } from '../../../services/shopping-cart.service';

//import { CartComponent } from '../../cart/cart.component';
//import { CheckoutDialog } from '../../checkout/checkout.component';
import { MaterialModule } from '../../material/material.module';
import { FacturacionComponent } from '../../facturacion/facturacion.component';
import { ClientesComponent } from '../../clientes/clientes.component';
import { ConfiguracionComponent } from '../../configuracion/configuracion.component';
import {NewClientComponent } from '../../new-client/new-client.component';
import { LoginService } from "../../../services/login.service";
import { CartComponent } from '../../cart/cart.component';
import { LogoutComponent } from '../../logout/logout.component';
import { CfdiComponent } from '../../cfdi/cfdi.component';
import { MarcasComponent } from '../../marcas/marcas.component';
import { LineasComponent } from '../../lineas/lineas.component';
import { ListasComponent } from '../../listas/listas.component';
import { ProveedoresComponent } from '../../proveedores/proveedores.component';
import { ComprasComponent } from '../../compras/compras.component';
import { ListascompraComponent } from '../../listascompra/listascompra.component';
import { NewMarcaComponent } from '../../new-marca/new-marca.component';
import { NewLineaComponent } from '../../new-linea/new-linea.component'
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
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
    DashboardComponent,
   // UserProfileComponent,
   // NewUserComponent,
    NewProductComponent,
    //LoginComponent,
    ProductsComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    //NotificationsComponent,
    UpgradeComponent,
    //CarritocomprasComponent,
    CartComponent,
    //CheckoutDialog,
    FacturacionComponent,
    ClientesComponent,
    ConfiguracionComponent,
    NewClientComponent,
    LogoutComponent,
    CfdiComponent,
    MarcasComponent,
    LineasComponent,
    ListasComponent,
    ListascompraComponent,
    ProveedoresComponent,
    ComprasComponent,
    NewMarcaComponent,
    NewLineaComponent
    
  ], 
  
  providers: [StorageService, ShoppingCartService, LoginService]


})

export class AdminLayoutModule {}
