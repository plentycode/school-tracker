import {App, Platform, NavController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {FIREBASE_PROVIDERS, defaultFirebase, AuthProviders, AuthMethods, firebaseAuthConfig} from "angularfire2/angularfire2";
import {LoginPage} from "./pages/login/login";
import {AlertsServices} from "./core/alerts.services";

declare var cordova: any;
@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [
    FIREBASE_PROVIDERS,
    defaultFirebase('https://schooltracker.firebaseio.com'),
    firebaseAuthConfig({
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
      remember: 'default',
      scope: ['email']
    }), 
    AlertsServices],
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  rootPage: any = LoginPage;

  constructor(platform: Platform) {
    // Initialize Firebase


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      document.addEventListener("deviceready", onDeviceReady, false);
      function onDeviceReady() {
        window.open = cordova.InAppBrowser.open;
      }
    });
  }
}
