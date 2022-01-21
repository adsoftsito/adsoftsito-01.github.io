import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'admin/dashboard', title: 'Ventas',  icon: 'dashboard', class: '' },
    { path: 'admin/facturacion', title: 'Facturacion',  icon: 'dashboard', class: '' },
    { path: 'admin/productos', title: 'Productos',  icon: 'dashboard', class: '' },
    { path: 'admin/marcas', title: 'Marcas',  icon: 'dashboard', class: '' },
    { path: 'admin/lineas', title: 'Lineas',  icon: 'dashboard', class: '' },
    { path: 'admin/clientes', title: 'Clientes',  icon: 'dashboard', class: '' },
    { path: 'admin/listas', title: 'Listas Precio',  icon: 'dashboard', class: '' },
    { path: 'admin/proveedores', title: 'Proveedores',  icon: 'dashboard', class: '' },
    { path: 'admin/compras', title: 'Compras',  icon: 'dashboard', class: '' },
    { path: 'admin/configuracion', title: 'Configuracion',  icon: 'dashboard', class: '' },
    { path: 'admin/logout', title: 'Cerrar sesion',  icon: 'dashboard', class: '' },

    /*{ path: '/carrito', title: 'Carrito',  icon: 'dashboard', class: '' },
    { path: '/clientes', title: 'Clientes',  icon: 'dashboard', class: '' },*/
    /* { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },*/
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  version = "0.0"

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    /*
    this.graalvService.getVersion()
    .subscribe((data: any) => {
     this.version = data.version;
     //alert(data.version);
   });*/
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }

      return true;
  };
}
