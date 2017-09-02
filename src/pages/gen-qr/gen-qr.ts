import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Badge } from '@ionic-native/badge';
import * as qrcode from "qrcode";
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-gen-qr',
  templateUrl: 'gen-qr.html'
})

export class GenQRPage {
  dataqr:String;
  @ViewChild('qrcodetag') qrcodetag: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams, private badge: Badge) {
    let clase = this;
    qrcode.toDataURL('Soy Juan José Miranda del Solar y esta es mi llave pública pe chochera!', function (err, url) {
      clase.dataqr = url;
    })
  }

  generaQR(){
    let clase = this;
    qrcode.toDataURL('Este es otro texto pe chocherita punto com!', function (err, url) {
      clase.qrcodetag.nativeElement.src = url;
    })
  }

  badgePen(valor){
    if(valor == 1){
      this.badge.increase(1);
    }else if(valor == -1){
      this.badge.decrease(1);
    }else{
      this.badge.set(valor);
    }
  }

}