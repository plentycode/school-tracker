import {Page, Alert, NavController} from 'ionic-angular';
import {AngularFire, AuthProviders, AuthMethods, FirebaseAuthState} from "angularfire2/angularfire2";
import {AlertsServices} from "../../core/alerts.services";

@Page({
    templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {
    loggedUser: any;
    constructor(private  _angularFire: AngularFire,
                private _nav: NavController) {
        this.loggedUser = null;
    }

    public googleSignIn() {
        this._angularFire.auth.login({
            provider:  AuthProviders.Google,
            method: AuthMethods.Popup
        }).then((authData: FirebaseAuthState) => this.handleLogin(authData)).catch((error) => this.handleAuthErrors(error));
    }


    public facebookSignIn() {
        this._angularFire.auth.login({
            provider:  AuthProviders.Facebook,
            method: AuthMethods.Popup
        }).then((authData: FirebaseAuthState) => this.handleLogin(authData)).catch((error) => this.handleAuthErrors(error));
    }


    public twitterSignIn() {
        this._angularFire.auth.login({
            provider:  AuthProviders.Twitter,
            method: AuthMethods.Popup
        }).then((authData: FirebaseAuthState) => this.handleLogin(authData)).catch((error) => this.handleAuthErrors(error));
    }

    public userPassSignIn(email: string, password: string) {
        this._angularFire.auth.login({
            email: email,
            password: password }).then((authData: FirebaseAuthState) => this.handleLogin(authData)).catch((error) => this.handleAuthErrors(error));
    }

    public logout(){
        this._angularFire.auth.logout();
    }

    public createUser(email: string, password: string) {
        this._angularFire.auth.createUser({
            email: email,
            password: password  
        }).then((data: any)=>{
            let message = "the user has been created";
            console.log(message);
            this.showAlert("Successful", message);
        })
    }

    private handleLogin(authData: FirebaseAuthState) {
        this.loggedUser = authData[AuthProviders[authData.provider].toLowerCase()];
        this.showAlert("Successful",
            `DisplayName: ${this.loggedUser.displayName || this.loggedUser.email}
            Token: ${this.loggedUser.accessToken || authData.uid}`);
    }

    private handleAuthErrors(error) {
        console.log(error);
        this.showAlert("Error", error);
    }

    private showAlert(title:string, message:string) {
        let alert = Alert.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        this._nav.present(alert);
    }

}