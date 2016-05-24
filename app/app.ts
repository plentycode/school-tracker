import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';

import {LoginPage} from './pages/login/login';
import {FirebaseService} from './core/firebase.service';

@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [FirebaseService],
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
    });
  }
}
