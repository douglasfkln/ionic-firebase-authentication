import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCarroPage } from './add-carro';

@NgModule({
  declarations: [
    AddCarroPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCarroPage),
  ],
})
export class AddCarroPageModule {}
