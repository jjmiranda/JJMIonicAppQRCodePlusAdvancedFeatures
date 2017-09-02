//home.module.ts
import { NgModule } from '@angular/core';
import { CameraQRPage} from './camera-qr';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [CameraQRPage],
  imports: [IonicPageModule.forChild(CameraQRPage)],
})
export class CameraQRPageModule { }
