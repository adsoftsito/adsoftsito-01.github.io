import { Component, OnInit } from '@angular/core';
import { CfdiService } from '../../services/cfdi.service';
import { ActivatedRoute } from '@angular/router';
import { GraphqlSalesService } from '../../services/graphql.sales.service';
import { StorageService } from "../../services/storage.service";
import { Cfdi33 } from "../../models/cfdi33/cfdi33";
import { Emisor33 } from "../../models/cfdi33/emisor33";
import { Receptor33 } from "../../models/cfdi33/receptor33";
import { Concepto33 } from "../../models/cfdi33/concepto33";

@Component({
  selector: 'app-cfdi',
  templateUrl: './cfdi.component.html',
  styleUrls: ['./cfdi.component.css']
})
export class CfdiComponent implements OnInit {

  loading: boolean;
  token : string;
  sale : any;
  emisor : any;

  cfdi33 = new Cfdi33;
  emisor33 = new Emisor33;
  receptor33 = new Receptor33;
  concepto33 : Concepto33;

  conceptos33 = [];

  saleid : number;

  constructor(
    private cfdiService: CfdiService,
    private graphqlSalesService: GraphqlSalesService,
    private storageService: StorageService,
    private route: ActivatedRoute, 
    )
    {
      this.route.params.subscribe( 
        res => {

        console.log(res.id)
        this.saleid = res.id
        }
      ); 
    
    }

    
  ngOnInit(): void {
    this.token = this.storageService.getSession("token");
    this.buscarSale(this.saleid);
    
  }

  buscarSale(valor : number) {
    //this.posts = [];
    console.log(this.token);
    console.log(valor);
    //alert(valor);

    this.graphqlSalesService.sale(this.token, valor)
    .subscribe(({ data, loading }) => {
      this.loading = loading;
      this.sale = JSON.parse(JSON.stringify(data)).sale;
      //this.conceptos = JSON.parse(JSON.stringify(data)).detail;
      
      console.log(JSON.stringify(this.sale));
      console.log(this.sale.sale.id);
      this.emisorme();
    });
  }

  emisorme() {
    console.log(this.token);
    
    this.graphqlSalesService.emisorme(this.token)
    .subscribe(({ data, loading }) => {
      this.loading = loading;
      this.emisor = JSON.parse(JSON.stringify(data)).emisorme;
      //this.conceptos = JSON.parse(JSON.stringify(data)).detail;
      console.log('emisorme : ');
      console.log(JSON.stringify(this.emisor));

      this.fillCfdi33();
    });
  }

  fillCfdi33()
  {
    
    this.cfdi33.serie = this.sale.sale.serie;
    this.cfdi33.folio = this.sale.sale.folio;
    this.cfdi33.total = this.sale.sale.total;
    this.cfdi33.formapago = this.sale.sale.formapago; 
    this.cfdi33.condicionesdepago = this.sale.sale.condicionesdepago; 
    this.cfdi33.subtotal = this.sale.sale.subtotal; 
    this.cfdi33.descuento = this.sale.sale.descuento; 
    this.cfdi33.moneda = this.sale.sale.moneda; 
    this.cfdi33.total = this.sale.sale.total; 
    this.cfdi33.tipodecomprobante = this.sale.sale.tipodecomprobante;
    this.cfdi33.metodopago = this.sale.sale.total.metodopago;
    this.cfdi33.lugarexpedicion = this.sale.sale.lugarexpedicion;

    // emisor
    this.emisor33.rfc = this.emisor.rfc;
    this.emisor33.nombre = this.emisor.nombre;
    this.emisor33.regimenfiscal = this.emisor.regimenfiscal;
    this.cfdi33.emisor = this.emisor33;

    // receptor
    this.receptor33.rfc = this.sale.sale.receptor.rfc;
    this.receptor33.nombre = this.sale.sale.receptor.nombre;
    this.receptor33.usocfdi = this.sale.sale.receptor.usocfdi;
    this.cfdi33.receptor = this.receptor33;

    // conceptos

    this.sale.detail.forEach(item => 
    {
      this.concepto33 = new Concepto33;
      this.concepto33.claveprodserv = item.codigosat;
      
      this.concepto33.noidentificacion = item.noidentificacion;
      this.concepto33.cantidad = item.cantidad;
      this.concepto33.claveunidad = item.claveunidad;
      this.concepto33.unidad = "PZA";
      this.concepto33.descripcion = item.product;
      this.concepto33.valorunitario = item.precio;
      this.concepto33.importe = item.importe;
      this.concepto33.descuento = item.descuento;
      console.log(this.concepto33);
      this.conceptos33.push(this.concepto33);

    })
    this.cfdi33.conceptos = this.conceptos33;

    console.log(JSON.stringify(this.cfdi33));

  }
  getCfdi() {
    /*
    var products = [];
    var mytoken = this.storageService.getSession("token");
    this.myCar.forEach(element => {
      products.push({
        product : element.id,
        cantidad : 1,
        precio: element.price
      })
    });
    alert(JSON.stringify(products));
    */

    var mycfdi =
    {
      "serie": "AAA",
      "folio": 1000,
      "formapago":"03", 
      "condicionesdepago":"CONTADO", 
      "subtotal":"1850", 
      "descuento":"175.00", 
      "moneda":"MXN", 
      "total":"1943.00", 
      "tipodecomprobante":"I", 
      "metodopago":"PUE", 
      "lugarexpedicion":"68050",
      "emisor": { 
                  "rfc" : "CETA7610219C9",
                  "nombre": "ADOLFO CENTENO TELLEZ",
                  "regimenfiscal":"601"
  
                },
      "receptor": {
                    "rfc": "KUB1004199C9",
                    "nombre": "KUBEET SRL DE CV",
                    "usocfdi":"G01"
                 },
      "conceptos": [
                  {
                     "claveprodserv" : "01010101",
                     "noidentificacion": "AULOG001",
                     "cantidad": "5",
                     "claveunidad": "H87",
                     "unidad": "Pieza",
                     "descripcion": "Aurriculares USB Logitech",
                     "valorunitario": "350.00",
                     "importe": "1750.00",
                     "descuento": "175.00",
                     "impuestos": {
                        "traslados" : [
                            {
                                "base": "1575.00",
                                "impuesto": "002",
                                "tipofactor": "Tasa",
                                "tasaocuota": "0.160000",
                                "importe": "252.00"
                            }
                        ],
                        "retenciones":[]
  
                     }
                  },
                  {
                     "claveprodserv" : "01010101",
                     "noidentificacion": "USB",
                     "cantidad": "1",
                     "claveunidad": "H87",
                     "unidad": "Pieza",
                     "descripcion": "Memoria USB 32gb marca Kingston",
                     "valorunitario": "100.00",
                     "importe": "100.00",
                     "descuento": "0.00",
                      "impuestos": {
                        "traslados" : [
                            {
                                "base": "100.00",
                                "impuesto": "002",
                                "tipofactor": "Tasa",
                                "tasaocuota": "0.160000",
                                "importe": "16.00"
                            }
                        ],
                        "retenciones":[]
  
  
                     }
                  }
      ],
      "impuestos": {
          "totalimpuestostrasladados": "268.00",
          "traslados" : [
              {
              "impuesto":"002",
              "tipofactor":"Tasa",
              "tasaocuota":"0.160000",
              "importe":"268.00"
              }
          ]
      }
      
  }
    alert("cfdi ...");
    this.cfdiService.getCfdi(mycfdi)
    .subscribe(( data ) => {
       console.log('Cfdi ok :  ', data);
       //this.router.navigate(['/']);
       alert(JSON.stringify(data));
       
    }, (error) => {
       console.log('there was an error in cfdi : ', error);
    });

   
  }

}
