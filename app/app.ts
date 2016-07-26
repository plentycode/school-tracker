import {Component} from '@angular/core';
import {StatusBar} from 'ionic-native';
import {FIREBASE_PROVIDERS, defaultFirebase, AuthProviders, AuthMethods, firebaseAuthConfig} from "angularfire2/angularfire2";
import {LoginPage} from "./pages/login/login";
import {AlertsServices} from "./core/alerts.services";
import {Platform, ionicBootstrap} from 'ionic-angular';

declare var cordova: any;
declare var IonicNative: any;

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [
    FIREBASE_PROVIDERS,
    defaultFirebase({
      apiKey: "AIzaSyCME9UDOaB90FpTxhfCb3_8el_p0UO8zwA",
      authDomain: "school-tracker.firebaseapp.com",
      databaseURL: "https://school-tracker.firebaseio.com",
      storageBucket: "school-tracker.appspot.com",
    }),
    firebaseAuthConfig({
      provider: AuthProviders.Google,
      method: AuthMethods.Redirect
    }),
    AlertsServices],
})
export class MyApp {
  rootPage: any = LoginPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);