import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {FIREBASE_PROVIDERS, defaultFirebase, AuthProviders, AuthMethods, firebaseAuthConfig} from "angularfire2/angularfire2";
import {LoginPage} from "./pages/login/login";

declare var cordova: any;
@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [
    FIREBASE_PROVIDERS,
    defaultFirebase('https://schooltracker.firebaseio.com'),
    firebaseAuthConfig({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
      remember: 'default',
      scope: ['email']
    })],
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
