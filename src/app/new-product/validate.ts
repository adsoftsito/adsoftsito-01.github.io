import { FormControl, ValidationErrors } from "@angular/forms";

export class Validate {

  static isValidTrasladoIVA(control: FormControl): ValidationErrors {
    const con = control.value;
    if(con == 0 || con == 0.16 || con == 0.08) 
      return null;
    else
      return { trasladoiva : true };
  }

  static isValidRetencionIVA(control: FormControl): ValidationErrors {
    const con = control.value;
    if(con >=0 &&  con <= 0.16) 
      return null;
    else    
      return { retencioniva : true };
  }

  static isValidRetencionISR(control: FormControl): ValidationErrors {
    const con = control.value;
    if(con >=0 &&  con <= 0.35) 
      return null;
    else    
      return { retencionisr : true };
  }

/**
 * FALTA RESOLVER
 */
  static isValidTrasladoIEPS_Tasa(control: FormControl): ValidationErrors {
    const con = control.value;
  
    if(
        con == 0.265 ||
        con == 0.3 ||
        con == 0.53 ||
        con == 0.5 ||
        con == 1.6 ||
        con == 0.304 ||
        con == 0.25 ||
        con == 0.09 ||
        con == 0.08 ||
        con == 0.07 ||
        con == 0.06 ||
        con == 0.03 ||
        con == 0
        ) 
      return null;
    else    
      return { trasladoieps : true };
  }


  static isValidRetencionIEPS_Tasa(control: FormControl): ValidationErrors {
    const con = control.value;
    if(
        con == 0.265 ||
        con == 0.3 ||
        con == 0.53 ||
        con == 0.5 ||
        con == 1.6 ||
        con == 0.304 ||
        con == 0.25 ||
        con == 0.09 ||
        con == 0.08 ||
        con == 0.07 ||
        con == 0.06 
        ) 
      return null;
    else    
      return { retencionieps:true };
  }


  static isValidTrasladoRetencionIEPS_Cuota(control: FormControl): ValidationErrors {
    const con = control.value;
    if( !(con >= 0 && con <= 59.1449)){ 
      return null;
    }else{  
      return { trasladoiepsc : true, retencioniepsc:true  };
    }
  }



}