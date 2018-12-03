import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { RegisterPage } from '../register/register';
import { UserPage } from '../user/user';
import { AuthService } from '../core/auth.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  // loginForm: FormGroup;
  loginForm: {
    email:'',
    password:''
  };
  errorMessage: string = '';

  constructor(
    public navCtrl: NavController,
    public authService: AuthService,
    public formBuilder: FormBuilder
  ) {}

  ionViewWillLoad(){
    this.loginForm = {
      email:'',
      password:''
    };
    // this.loginForm = this.formBuilder.group({
    //   email: new FormControl(),
    //   password: new FormControl(),
    // });
  }

  tryLogin(){
    firebase.auth().signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password)
     .then(res => {
      console.log(res);
      this.navCtrl.push(UserPage);
     }, err => {this.errorMessage = err});
    // this.authService.doLogin(value)
    // .then(res => {
    //   // console.log(res);
    //   this.navCtrl.push(UserPage);
    // }, err => {
    //   console.log(err);
    //   this.errorMessage = err.message;
    // })
  }

  // tryFacebookLogin(){
  //   this.authService.doFacebookLogin()
  //   .then((res) => {
  //     this.navCtrl.push(UserPage);
  //   }, (err) => {
  //     this.errorMessage = err.message;
  //   });
  // }

  // tryGoogleLogin(){
  //   this.authService.doGoogleLogin()
  //   .then((res) => {
  //     this.navCtrl.push(UserPage);
  //   }, (err) => {
  //     this.errorMessage = err.message;
  //   });
  // }

  // tryTwitterLogin(){
  //   this.authService.doTwitterLogin()
  //   .then((res) => {
  //     this.navCtrl.push(UserPage);
  //   }, (err) => {
  //     this.errorMessage = err.message;
  //   });
  // }

  goRegisterPage(){
    this.navCtrl.push(RegisterPage);
  }

}
