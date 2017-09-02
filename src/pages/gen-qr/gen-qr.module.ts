import { NgModule } from '@angular/core';
import { GenQRPage} from './gen-qr';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [GenQRPage],
  imports: [IonicPageModule.forChild(GenQRPage)],
})
export class GenQRPageModule { }
