import { Emisor33 } from "./emisor33";
import { Receptor33 } from "./receptor33";
import { Concepto33 } from "./concepto33";
import { CfdiImpuestos33 } from "./cfdiimpuestos33";

export class Cfdi33 {
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
    emisor: Emisor33;
    receptor: Receptor33;
    conceptos: Concepto33[];
    impuestos: CfdiImpuestos33
}