import {Injectable, OnInit} from "@angular/core";
import {Test} from "./test";
import {Qrcode} from "./qrcode";
import {Status} from "./status";

@Injectable({
  providedIn: 'root'
})

export class TestStoreService implements OnInit {

  tests: Test[];

  constructor() {
    this.tests = [
      {
        number: '1',
        name: 'Smith',
        lastname: 'Tom',
        testdate: '05-01-2023',
        krankenkasse: 'AOK',
        status: {url:'https://freepngimg.com/thumb/red_cross_mark/117880-cross-mark-free-clipart-hd-thumb.png'},
        personbirthdate: '08-06-1995',
        testtype: 'PCR',
        serialnumber: '331',
        result: 'Negative',
        qrcode: {
          url: 'http://localhost:4200/qrcode/1',
          title: 'QRCode'
        }
      },

      {
        number: '2',
        name: 'Sam',
        lastname: 'Tomson',
        testdate: '06-01-2023',
        krankenkasse: 'AOK',
        status: {url: 'https://www.pngmart.com/files/3/Green-Tick-PNG-Clipart.png'},
        personbirthdate: '08-06-2001',
        testtype: 'Schnelltest',
        serialnumber: '332',
        result: 'Negative',
        qrcode: {
          url: 'http://localhost:4200/qrcode/2',
          title: 'QRCode'
        }
      }
    ]
  }

  ngOnInit(): void {
  }

  getAll(): Test[] {
    return this.tests;
  }
  getSingle(number: string | null): Test | undefined {
    return this.tests.find(test => test.number === number )
  }
}

//Bezeichnung convention  crud operation ,Daten zu hadeln
