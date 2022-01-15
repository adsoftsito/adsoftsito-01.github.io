import { Emisor40 } from "./emisor40";
import { Receptor40 } from "./receptor40";
import { Concepto40 } from "./concepto40";
import { CfdiImpuestos40 } from "./cfdiimpuestos40";

export class Cfdi40 {
    serie : string;
    folio : string;
    formapago: string; 
    condicionesdepago : string; 
    subtotal : string; 
    descuento : string; 
    moneda : string; 
    total : string; 
    tipodecomprobante : string;
    metodopago : string;
    lugarexpedicion : string;
    emisor: Emisor40;
    receptor: Receptor40;
    conceptos: Concepto40[];
    impuestos: CfdiImpuestos40
}