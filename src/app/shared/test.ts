import {Status} from "./status";
import {Qrcode} from "./qrcode";


export interface Test{

  number: string
  name:string,
  lastname:string,
  testdate:string,
  krankenkasse:string,
  status:Status,
  personbirthdate:string,
  testtype:string,
  serialnumber:string,
  result:string,
  qrcode:Qrcode

}
