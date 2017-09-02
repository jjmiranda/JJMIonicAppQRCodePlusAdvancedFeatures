import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { Device } from '@ionic-native/device';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Badge } from '@ionic-native/badge';
import { ServicioProvider } from '../providers/servicio/servicio';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '92ffe8ea'
  }
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    UniqueDeviceID,
    Device,
    BarcodeScanner,
    Badge,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicioProvider
  ]
})
export class AppModule {}
