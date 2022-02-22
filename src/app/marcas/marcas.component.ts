import { Component, OnInit } from '@angular/core';
import { GraphqlMarcasService} from '../../services/graphql.marcas.service';
import { StorageService } from "../../services/storage.service";

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})

export class MarcasComponent implements OnInit {

  loading: boolean;
  posts: any;
  //private querySubscription: Subscription;
  user: string;
  token: string;
  valor: string;

  constructor(private graphqlMarcasService: GraphqlMarcasService,
              private storageService : StorageService
              ) 
             {}

  ngOnInit() {
    this.user = this.storageService.getSession("user");
    this.token = this.storageService.getSession("token");
   this.buscar("*");
  }

  search()
  {
    //alert(this.valor);
    this.buscar(this.valor);
  }

  buscar(valor :string) {
    //this.posts = [];
    console.log(this.token);
    console.log(valor);

    this.graphqlMarcasService.marcas(this.token, valor)
    .subscribe(({ data, loading }) => {
      this.loading = loading;
      this.posts = JSON.parse(JSON.stringify(data)).marcas;
      console.log(JSON.stringify(this.posts))
    });
  }

  ngOnDestroy() {

  }
  
}
