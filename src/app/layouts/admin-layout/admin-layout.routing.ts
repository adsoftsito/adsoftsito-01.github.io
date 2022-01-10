import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { NewUserComponent } from '../../new-user/new-user.component';
import { ProductsComponent } from '../../products/products.component';
import { LoginComponent } from '../../login/login.component';
import { NewProductComponent } from '../../new-product/new-product.component';
import { CarritocomprasComponent } from '../../carritocompras/carritocompras.component';
import { FacturacionComponent } from '../../facturacion/facturacion.component';
import { ClientesComponent } from '../../clientes/clientes.component';
import { ConfiguracionComponent } from '../../configuracion/configuracion.component';
import { NewClientComponent } from '../../new-client/new-client.component';
import { LogoutComponent } from '../../logout/logout.component';
import { CfdiComponent } from '../../cfdi/cfdi.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'admin/dashboard',     component: DashboardComponent },
    { path: 'admin/facturacion',   component: FacturacionComponent },
    { path: 'admin/productos',     component: ProductsComponent },
    { path: 'admin/clientes',      component: ClientesComponent },
    { path: 'admin/configuracion', component: ConfiguracionComponent },
    { path: 'admin/new-product',   component: NewProductComponent },
    { path: 'admin/new-client',    component: NewClientComponent },
    { path: 'admin/logout',        component: LogoutComponent },
    { path: 'admin/cfdi/:id',          component: CfdiComponent },



    //{ path: 'new-user',       component: NewUserComponent },
    //{ path: 'login',          component: LoginComponent },
    //{ path: 'carrito',        component: CarritocomprasComponent },
    //{ path: 'admin/table-list',     component: TableListComponent },
    //{ path: 'typography',     component: TypographyComponent },
    //{ path: 'icons',          component: IconsComponent },
    //{ path: 'maps',           component: MapsComponent },
    //{ path: 'notifications',  component: NotificationsComponent },
    //{ path: 'upgrade',        component: UpgradeComponent },
];
