import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParkModePage } from './park-mode-page';

@NgModule({
  declarations: [
    ParkModePage,
  ],
  imports: [
    IonicPageModule.forChild(ParkModePage),
  ],
  exports: [
    ParkModePage
  ]
})
export class ParkModePageModule {}
