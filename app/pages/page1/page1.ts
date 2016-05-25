import {Page} from 'ionic-angular';
import {FirebaseAuth, AngularFire, AuthProviders} from "angularfire2/angularfire2";

@Page({
  templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 {
  loggedUser: any;
  constructor(private  _angularFire: AngularFire) {
    this.loggedUser = null;
  }

  public googleSignIn() {
    this._angularFire.auth.login({
      provider:  AuthProviders.Google
    }).then((authData) => {
      this.loggedUser = authData.google;
    });
  }


  public facebookSignIn() {
    this._angularFire.auth.login({
      provider:  AuthProviders.Facebook
    }).then((authData) => {
      this.loggedUser = authData.facebook;
    });
  }


  public twitterSignIn() {
    this._angularFire.auth.login({
      provider:  AuthProviders.Twitter
    }).then((authData) => {
      this.loggedUser = authData.twitter;
    });
  }

  public userPassSignIn() {
    this._angularFire.auth.login({
      provider:  AuthProviders.Password
    }).then((authData) => {
      this.loggedUser = authData.password;
    });
  }

  public logout(){
    this._angularFire.auth.logout();
  }
  
}
