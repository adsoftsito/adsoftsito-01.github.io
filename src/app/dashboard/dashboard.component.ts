import { Component, OnInit, OnDestroy } from '@angular/core';
import { CarritocomprasComponent } from 'app/carritocompras/carritocompras.component';
import * as Chartist from 'chartist';
import { Subscription } from 'rxjs';
import { GraphqlProductsService} from '../../services/graphql.products.service';
import { ShoppingCartService, CartItem, Totals } from '../../services/shopping-cart.service';
import { ShopItem } from '../../models/CartItem'
import { ProductApi } from '../../models/productapi'
import { LoginService } from "../../services/login.service";
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { NewUserComponent } from '../new-user/new-user.component';
import { LogoutComponent } from '../logout/logout.component';
import { StorageService } from "../../services/storage.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  valor : string;
  token : string;
  user : string
  loading: boolean;
  posts: any;
  private querySubscription: Subscription;

  constructor(private graphqlProductsService: GraphqlProductsService,
    private shoppingCartService: ShoppingCartService,
    private loginService : LoginService,
    private dialog : MatDialog,
    private storageService : StorageService

    ) {}

  cartState$ = this.shoppingCartService.state$;
  
  addItemToCart(item: ProductApi) {
    //alert(JSON.stringify(item));
    var myItem = new ShopItem();
    myItem.id = item.id;
    myItem.name = item.description;
    myItem.price = item.precio;
    this.shoppingCartService.addCartItem(myItem);
  }
  
  checkout(): void {
    // this.shoppingCartService.checkout();
    
    let dialogRef = this.dialog.open(LoginComponent, {
      // data: { state: this.state }, // now uses the observable
      height: '400px',
      width: '400px',
    });
  }

  logout(): void {
    // this.shoppingCartService.checkout();
    
    let dialogRef = this.dialog.open(LogoutComponent, {
      // data: { state: this.state }, // now uses the observable
      height: '400px',
      width: '400px',
    });
  }

  newuser(): void {
    // this.shoppingCartService.checkout();
    
    let dialogRef = this.dialog.open(NewUserComponent, {
      // data: { state: this.state }, // now uses the observable
      height: '450px',
      width: '400px',
    });
  }

  search()
  {
    alert(this.valor);
    this.buscar(this.valor);
  }

  buscar(valor :string) {

    this.querySubscription = this.graphqlProductsService.links(valor)
      .valueChanges
      .subscribe(({ data, loading }) => {
        this.loading = loading;
        this.posts = JSON.parse(JSON.stringify(data)).links;
        console.log(JSON.stringify(this.posts))
      });

  }
  remove(item: CartItem): void {
    this.shoppingCartService.removeCartItem(item);
  }
  ngOnInit() {
/*
    this.querySubscription = this.loginService.getData().subscribe(data => {
      alert("print data"+ data);
      this.user = data.user;

      this.token = data.token;
      console.log("user: " + this.user);

      console.log("token: " + this.token);
    });
*/
    this.user = this.storageService.getSession("user");
    this.token = this.storageService.getSession("token");
   this.buscar("-");
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
  
  startAnimationForLineChart(chart){
      let seq: any, delays: any, durations: any;
      seq = 0;
      delays = 80;
      durations = 500;

      chart.on('draw', function(data) {
        if(data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if(data.type === 'point') {
              seq++;
              data.element.animate({
                opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'ease'
                }
              });
          }
      });

      seq = 0;
  };
  startAnimationForBarChart(chart){
      let seq2: any, delays2: any, durations2: any;

      seq2 = 0;
      delays2 = 80;
      durations2 = 500;
      chart.on('draw', function(data) {
        if(data.type === 'bar'){
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
      });

      seq2 = 0;
  };

  }
