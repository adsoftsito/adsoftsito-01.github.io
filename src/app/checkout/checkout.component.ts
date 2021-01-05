import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Observable, of } from 'rxjs';
import { switchMap, shareReplay, share, take } from 'rxjs/operators';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutDialog {
  state = this.shoppingCartService.state$.pipe();

    // @Inject(MAT_DIALOG_DATA) public data: any,
  constructor(
    private shoppingCartService: ShoppingCartService,
    private dialogRef: MatDialogRef<CheckoutDialog>) { }

  completeOrder() {

    this.shoppingCartService.checkout();
  }
}