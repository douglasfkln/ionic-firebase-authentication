import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserService } from '../core/user.service';
import { AuthService } from '../core/auth.service';
import { FirebaseUserModel } from '../core/user.model';
import * as firebase from 'firebase/app';
import { CarrosPage } from '../carros/carros';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})

export class UserPage{

  // user: FirebaseUserModel = new FirebaseUserModel();
  user: {
    // image:string,
    email:''
  };
  email:string = '';

  constructor(
    public navCtrl: NavController,
    // public userService: UserService,
    public authService: AuthService,
    public navParams: NavParams
  ) {
    // this.user.image = "http://dsi-vd.github.io/patternlab-vd/images/fpo_avatar.png";
    this.email = this.navParams.get('email');
    // console.log(this.user);
  }

  ionViewWillLoad () {
  }


  logout(){
    // if(firebase.auth().currentUser){
    //   this.afAuth.auth.signOut()
    //   resolve();
    // }
    // this.authService.doLogout()
    // .then((res) => {
    //   this.navCtrl.pop();
    // }, (error) => {
    //   console.log("Logout error", error);
    // });
  }

  meus_carros() {
    this.navCtrl.push(CarrosPage);
  }
}
