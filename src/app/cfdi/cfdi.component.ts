import { Component, OnInit } from '@angular/core';
import { CfdiService } from '../../services/cfdi.service';
import { ActivatedRoute } from '@angular/router';
import { GraphqlSalesService } from '../../services/graphql.sales.service';
import { StorageService } from "../../services/storage.service";
import { Cfdi33 } from "../../models/cfdi33/cfdi33";
import { Emisor33 } from "../../models/cfdi33/emisor33";
import { Receptor33 } from "../../models/cfdi33/receptor33";
import { Concepto33 } from "../../models/cfdi33/concepto33";
import { ConceptoImpuestos33 } from "../../models/cfdi33/conceptoimpuestos33";
import { Traslado33 } from 'models/cfdi33/traslado33';
import { Retencion33 } from 'models/cfdi33/retencion33';
import { CfdiImpuestos33 } from 'models/cfdi33/cfdiimpuestos33';

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
  conceptoimpuestos33 = new ConceptoImpuestos33;
  cfdiimpuestos33 : CfdiImpuestos33;

  conceptos33 = [];
  traslados = [];
  retenciones = [];
  traslado : Traslado33;
  retencion : Retencion33;
  totaltraslado : number;
  totalretenciones : number;
  totalbaseimpuesto : number;
  subtotal : number;
  total : number;
  xml : string;
  pdf : string;  

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

      //this.fillCfdi33();
    });
  }

  roundTo = function(num: number, places: number) {
    const factor = 10 ** places;
    return Math.round(num * factor) / factor;
  };

  fillCfdi33()
  {
    
    this.cfdi33.serie = this.sale.sale.serie;
    this.cfdi33.folio = this.sale.sale.folio;
    this.cfdi33.formapago = this.sale.sale.formapago; 
    this.cfdi33.condicionesdepago = this.sale.sale.condicionesdepago; 
    this.cfdi33.subtotal = this.sale.sale.subtotal; 
    this.cfdi33.descuento = this.sale.sale.descuento; 
    this.cfdi33.moneda = this.sale.sale.moneda; 
    this.cfdi33.tipodecomprobante = this.sale.sale.tipodecomprobante;
    this.cfdi33.metodopago = this.sale.sale.metodopago;
    this.cfdi33.lugarexpedicion = this.sale.sale.lugarexpedicion;

    // emisor
    this.emisor33.rfc = this.emisor.rfc;
    this.emisor33.nombre = this.emisor.nombre;
    this.emisor33.regimenfiscal = "601"; //this.emisor.regimenfiscal;
    this.cfdi33.emisor = this.emisor33;

    // receptor
    this.receptor33.rfc = this.sale.sale.receptor.rfc;
    this.receptor33.nombre = this.sale.sale.receptor.nombre;
    this.receptor33.usocfdi = this.sale.sale.receptor.usocfdi;
    this.cfdi33.receptor = this.receptor33;

    // conceptos
    this.conceptos33 = [];

    this.totaltraslado = 0;
    this.totalbaseimpuesto = 0;
    this.subtotal = 0;
    this.total = 0;

    this.sale.detail.forEach(item => 
    {
      this.concepto33 = new Concepto33;
      this.concepto33.claveprodserv = "01010101"; // item.codigosat;
      
      this.concepto33.noidentificacion = item.noidentificacion;
      this.concepto33.cantidad = item.cantidad;
      this.concepto33.claveunidad = "H87"; //item.claveunidad;
      this.concepto33.unidad = "PZA";
      this.concepto33.descripcion = item.product;

      var precio = item.precio / (1 + 0.160000);
      
      this.concepto33.valorunitario = "" + this.roundTo(precio, 4);

      //var otroimporte = precio * item.cantidad;

      var importe = precio * item.cantidad;

      this.concepto33.importe = "" + this.roundTo(importe, 4);
      this.concepto33.descuento = item.descuento;
      

      
      
      // traslados del concepto
      var subtotalconcepto = importe;  // (1 + 0.160000)


      var impuestotraslado = subtotalconcepto * 0.160000;
      //impuestotraslado= Math.round( impuestotraslado * 10^6 ) / 10^6;

      subtotalconcepto= this.roundTo(subtotalconcepto, 4);
      impuestotraslado= this.roundTo(impuestotraslado, 4);

      console.log("otro precio " + precio)

     // console.log("otro importe " + otroimporte)

      console.log("importe " + importe)
      console.log("base " + subtotalconcepto)
      console.log("impuesto " + impuestotraslado)

      this.conceptoimpuestos33 = new ConceptoImpuestos33;

      this.traslados = [];
      this.traslado = new Traslado33;

      this.traslado.base = "" + subtotalconcepto;
      this.traslado.importe = "" + impuestotraslado;
      this.traslado.impuesto = "002";
      this.traslado.tasaocuota = "0.160000";
      this.traslado.tipofactor = "Tasa";

 
      this.totalbaseimpuesto += subtotalconcepto;
      this.totaltraslado += impuestotraslado;
 
      console.log(this.traslado);

      this.traslados.push(this.traslado);

      this.conceptoimpuestos33.traslados = this.traslados;
      this.conceptoimpuestos33.retenciones = this.retenciones;
      
      this.concepto33.impuestos = this.conceptoimpuestos33;
      
      this.conceptos33.push(this.concepto33);
      console.log(this.conceptos33);

    })


    this.cfdi33.conceptos = this.conceptos33;
    
    this.totaltraslado = this.roundTo(this.totaltraslado, 2)
    this.totalbaseimpuesto = this.roundTo(this.totalbaseimpuesto,4)
    this.subtotal = this.totalbaseimpuesto;

    this.cfdiimpuestos33 = new CfdiImpuestos33;
    this.cfdiimpuestos33.totalimpuestostrasladados = "" + this.totaltraslado;
    // traslados del cfdi
    this.traslados = [];
    this.traslado = new Traslado33;
    this.traslado.base = "" + this.totalbaseimpuesto;
    this.traslado.importe = "" + this.totaltraslado;
    this.traslado.impuesto = "002";
    this.traslado.tasaocuota = "0.160000";
    this.traslado.tipofactor = "Tasa";
    this.traslados.push(this.traslado);

    this.cfdiimpuestos33.traslados = this.traslados;

    this.cfdi33.impuestos = this.cfdiimpuestos33;

    this.total = this.subtotal + this.totaltraslado;

    this.total = this.roundTo(this.total, 2)
    this.subtotal = this.roundTo(this.subtotal, 2)
  
    this.cfdi33.total = "" + (this.total);
    this.cfdi33.subtotal = "" + this.subtotal;

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
/*
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
  */
    this.fillCfdi33();

    alert(JSON.stringify(this.cfdi33));
    this.cfdiService.getCfdi(JSON.stringify(this.cfdi33))
    .subscribe(( data ) => {
       console.log('Cfdi ok :  ', data);

       console.log('Cfdi ok :  ', data.xml);
       console.log('Cfdi ok :  ', data.pdf);

       this.xml = data.xml;
       this.pdf = data.pdf;

       if (this.xml && this.pdf) {
         console.log("ok")

         this.graphqlSalesService.updateSale(this.token, this.saleid, "A", this.xml, this.pdf)
         .subscribe(({ data }) => {

           console.log(JSON.stringify(JSON.parse(JSON.stringify(data)).updateSale));
           
         });
       

       }
       else {
        console.log("error ")
       }
       //console.log('Cfdi json :  ', JSON.stringify(data));
       //this.router.navigate(['/']);
       //alert(JSON.stringify(data));
       
    }, (error) => {
       console.log('there was an error in cfdi : ', error);
    });

   
  }

}
