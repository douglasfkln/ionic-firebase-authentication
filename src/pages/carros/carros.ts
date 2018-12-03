import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as firebase from 'firebase';
import { AddCarroPage } from '../add-carro/add-carro';

/**
 * Generated class for the CarrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carros',
  templateUrl: 'carros.html',
})
export class CarrosPage {

  carros = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidEnter() {
    firebase.database().ref('carros/').on('value', resp => {
      this.carros = [];
      let t = this;
      // Percore os registros e seta no array de visualização
      resp.forEach(it => {
        let item = it.val();
        item.key = it.key;
        t.carros.push(item);
      });
      console.log(this.carros);
    });
  }

  add_carro () {
    this.navCtrl.push(AddCarroPage);
  }
}
