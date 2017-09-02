import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { Device } from '@ionic-native/device';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = 'HelloIonicPage';
  pages: Array<{title: string, component: any}>;
  uniqueID:any;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public uniqueDeviceID: UniqueDeviceID,
    public device: Device
  ) {
      this.initializeApp();

      // set our app's pages
      this.pages = [
        { title: 'My First Home', component: 'HelloIonicPage' },
        { title: 'My First List', component: 'ListPage' },
        { title: 'My First Camera QR', component: 'CameraQRPage' },
        { title: 'My First Gen QR', component: 'GenQRPage' }
      ];
    }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.hide() //styleDefault();
      this.splashScreen.show();
      console.log('In app.component.ts, Device UUID is: ' + this.device.uuid);
      console.log('Device platform is: ' + this.device.platform);
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
