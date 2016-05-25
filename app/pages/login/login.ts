import {Page} from 'ionic-angular';
import {AngularFire, AuthProviders} from "angularfire2/angularfire2";

@Page({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {
    loggedUser: any;
    constructor(private  _angularFire: AngularFire) {
        this.loggedUser = null;
    }

    public googleSignIn() {
        this._angularFire.auth.login({
            provider:  AuthProviders.Google
        }).then((authData) => {
            this.loggedUser = authData.google;
        }).catch(this.handleAuthErrors);
    }


    public facebookSignIn() {
        this._angularFire.auth.login({
            provider:  AuthProviders.Facebook
        }).then((authData) => {
            this.loggedUser = authData.facebook;
        }).catch(this.handleAuthErrors);
    }


    public twitterSignIn() {
        this._angularFire.auth.login({
            provider:  AuthProviders.Twitter
        }).then((authData) => {
            this.loggedUser = authData.twitter;
        }).catch(this.handleAuthErrors);
    }

    public userPassSignIn() {
        this._angularFire.auth.login({
            provider:  AuthProviders.Password
        }).then((authData) => {
            this.loggedUser = authData.password;
        }).catch(this.handleAuthErrors);   
    }

    public logout(){
        this._angularFire.auth.logout();
    }

    private handleAuthErrors(error) {
        console.log(error);
    }

}