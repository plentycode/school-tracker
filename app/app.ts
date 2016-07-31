import {Component} from '@angular/core';
import {StatusBar} from 'ionic-native';
import {FIREBASE_PROVIDERS, defaultFirebase, AuthProviders, AuthMethods, firebaseAuthConfig} from "angularfire2/angularfire2";
import {LoginPage} from "./pages/login/login";
import {AlertsServices} from "./core/alerts.services";
import {Platform, ionicBootstrap} from 'ionic-angular';
import {CloudSettings, provideCloud} from '@ionic/cloud-angular';
//https://developers.google.com/cloud-messaging/

declare var cordova: any;
declare var IonicNative: any;
const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'YOUR-APP-ID'
  }
};
@Component({
  templateUrl: 'build/app.html',
  providers: [
    FIREBASE_PROVIDERS,
    defaultFirebase({
      apiKey: "AIzaSyCME9UDOaB90FpTxhfCb3_8el_p0UO8zwA",
      authDomain: "school-tracker.firebaseapp.com",
      databaseURL: "https://school-tracker.firebaseio.com",
      storageBucket: "school-tracker.appspot.com",
    }),
    firebaseAuthConfig({
      provider: AuthProviders.Password,
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

ionicBootstrap(MyApp, [provideCloud(cloudSettings)]);
