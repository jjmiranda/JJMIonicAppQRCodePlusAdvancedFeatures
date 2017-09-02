import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Device } from '@ionic-native/device';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-camera-qr',
  templateUrl: 'camera-qr.html'
})

export class CameraQRPage {
  uuidnum: String;
  text_read: String;
  format: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public barcodeScanner: BarcodeScanner, public device: Device) {
    this.uuidnum = this.device.uuid
    console.log('Device UUID is: ' + this.device.uuid);
    
  }

  scaneaCodigo(event){
    this.barcodeScanner.scan().then((barcodeData) => {
      // Success! Barcode data is here
      this.text_read = barcodeData.text;
      this.format = barcodeData.format;
      console.log('barcodeData: ' + this.text_read + " " + this.format);

    }, (err) => {
      // An error occurred
      console.log('err: ' + err);
    });
  }
}