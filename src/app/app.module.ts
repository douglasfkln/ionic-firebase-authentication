import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { UserPage} from '../pages/user/user';


import { AuthService } from '../pages/core/auth.service';
import { UserService } from '../pages/core/user.service';

// import { AngularFireModule } from 'angularfire2';
// import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environment/environment';

import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { CarrosPageModule } from '../pages/carros/carros.module';
import { AddCarroPageModule } from '../pages/add-carro/add-carro.module';
import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAt_4sGgAs4BP2AH5e_FqI9Yxxu6jTR4-s",
  authDomain: "chat-ionic3-firebase.firebaseapp.com",
  databaseURL: "https://chat-ionic3-firebase.firebaseio.com",
  projectId: "chat-ionic3-firebase",
  storageBucket: "chat-ionic3-firebase.appspot.com",
  messagingSenderId: "187596625088"
};

firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    UserPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAuthModule,
    CarrosPageModule,
    AddCarroPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    UserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    GooglePlus,
    AuthService,
    TwitterConnect,
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
