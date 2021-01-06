import { Component, OnInit } from '@angular/core';
import { ProductApi } from "../../models/productapi";
import { GraphqlProductsService} from '../../services/graphql.products.service';
import { Router } from '@angular/router';
import { StorageService } from "../../services/storage.service";
import { FileUploadService } from '../../services/file-upload.service';
import { FileUpload } from '../../models/file-upload';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  myProduct = new ProductApi;
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;


  constructor(private graphqlProduct : GraphqlProductsService,
              private router : Router,
              private storageService: StorageService,
              private uploadService: FileUploadService) { }

  ngOnInit(): void {
  }

  selectFile(event): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentFileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);
      },
      error => {
        console.log(error);
      }
    );
  }

  addProduct() {
    var mytoken = this.storageService.getSession("token");
    alert(JSON.stringify(this.myProduct));
    this.graphqlProduct.createLink(mytoken, this.myProduct.url,
                  this.myProduct.description, this.myProduct.precio)
    .subscribe(({ data }) => {
       console.log('product created :  ', data);
       this.router.navigate(['/productos']);
    }, (error) => {
       console.log('there was an error sending the query', error);
    });
  
   
  }

}
