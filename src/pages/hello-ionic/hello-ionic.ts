import { ServicioProvider } from './../../providers/servicio/servicio';
import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Device } from '@ionic-native/device';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})

export class HelloIonicPage {
  uuidnum: String;
  countries: string[];
  errorMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public servicio: ServicioProvider, private device: Device,
              private platform: Platform) {

    this.platform.ready().then(() => {
      this.uuidnum = this.device.uuid;
      console.log('In Hello platform.ready , Device UUID is: ' + this.device.uuid);
      console.log('Device platform is: ' + this.device.platform);
    });

  }

  ionViewDidLoad() {
    this.uuidnum = this.device.uuid;
    console.log('In Hello:ionViewDidLoad, Device UUID is: ' + this.uuidnum);
    this.obtenCiudades();
  }

  obtenCiudades() {
    this.servicio.getCountries()
       .subscribe(
         paises => this.countries = paises,
         error =>  this.errorMessage = <any>error);
  }

  ngAfterViewInit(){
    this.uuidnum = this.device.uuid
    console.log('In Hello:ngAfterViewInit, Device UUID is: ' + this.uuidnum);
  }
}