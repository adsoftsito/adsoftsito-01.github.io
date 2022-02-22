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


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  valor : string;
  token : string;
  user : string
  loading: boolean;
  posts: any;
  private querySubscription: Subscription;

  constructor(private graphqlProductsService: GraphqlProductsService,
    private shoppingCartService: ShoppingCartService,
    private loginService : LoginService,
    private dialog : MatDialog
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
  
  login(): void {
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
    //alert(this.valor);
    //this.buscar(this.valor);
  }

  buscar(valor :string) {

    this.querySubscription = this.graphqlProductsService.links("token", valor)
      //.valueChanges
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

    this.querySubscription = this.loginService.getData().subscribe(data => {
      //alert("print data"+ data);
      this.user = data.user;

      this.token = data.token;
      //console.log("token: " + this.token);
    });

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
/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAF1og02DFYvP9tjGYNT6YlP2YSl6-G4RQ",
    authDomain: "elmandadero-storage.firebaseapp.com",
    projectId: "elmandadero-storage",
    storageBucket: "elmandadero-storage.appspot.com",
    messagingSenderId: "570694818428",
    appId: "1:570694818428:web:f28410432578bf336647f9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>



  ngOnInit() {

      const dataDailySalesChart: any = {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [
              [12, 17, 7, 17, 23, 18, 38]
          ]
      };

     const optionsDailySalesChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
      }

      var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(dailySalesChart);



      const dataCompletedTasksChart: any = {
          labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
          series: [
              [230, 750, 450, 300, 280, 240, 200, 190]
          ]
      };

     const optionsCompletedTasksChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
      }

      var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

      // start animation for the Completed Tasks Chart - Line Chart
      this.startAnimationForLineChart(completedTasksChart);




      var datawebsiteViewsChart = {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        series: [
          [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

        ]
      };
      var optionswebsiteViewsChart = {
          axisX: {
              showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
      };
      var responsiveOptions: any[] = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      var websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);

      //start animation for the Emails Subscription Chart
      this.startAnimationForBarChart(websiteViewsChart);
  }
*/
}
