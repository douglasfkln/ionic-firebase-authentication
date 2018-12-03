import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

/**
 * Generated class for the AddCarroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-carro',
  templateUrl: 'add-carro.html',
})
export class AddCarroPage {

  carro = {
    marca:'',
    modelo:'',
    ano:''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCarroPage');
  }

  salvar () {
    firebase.database().ref('carros/').push().set({
      marca:this.carro.marca,
      modelo:this.carro.modelo,
      ano:this.carro.ano,
    });
    this.navCtrl.pop();
  }
}
