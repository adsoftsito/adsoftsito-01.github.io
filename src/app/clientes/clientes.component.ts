import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GraphqlClientsService} from '../../services/graphql.clients.service';
import { StorageService } from "../../services/storage.service";


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {


  loading: boolean;
  posts: any;
  user: string;
  token: string;

  private querySubscription: Subscription;

  constructor(private graphqlClientsService: GraphqlClientsService,
              private storageService : StorageService
    ) {
  
    this.user = this.storageService.getSession("user");
    this.token = this.storageService.getSession("token");
  
  }

  ngOnInit() {
    this.querySubscription = this.graphqlClientsService.receptor(this.token, "*")
      //.valueChanges
      .subscribe(({ data, loading }) => {
        this.loading = loading;
        this.posts = JSON.parse(JSON.stringify(data)).receptor;
        console.log(JSON.stringify(this.posts))
      });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
  
}
