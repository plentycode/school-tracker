import { Injectable } from '@angular/core';
import './IFirebase'
import 'firebase';
import { Observable, Subject } from 'rxjs';

declare var firebase: IFirebase;
declare var cordova: any;

@Injectable()
export class FirebaseService {
    private auth: any;
    private database: any;
    private storage: any;
    public loggedUser: any;
    public onAuthChanged: Subject<any>;

    constructor() {
        let config = {
            apiKey: "AIzaSyCME9UDOaB90FpTxhfCb3_8el_p0UO8zwA",
            authDomain: "school-tracker.firebaseapp.com",
            databaseURL: "https://school-tracker.firebaseio.com",
            storageBucket: "school-tracker.appspot.com",
        };

        this.onAuthChanged = new Subject();

        firebase.initializeApp(config);
        this.auth = firebase.auth();
        this.database = firebase.database();
        this.storage = firebase.storage();
        this.auth.onAuthStateChanged((user: any) => this.onAuthStateChanged(user));

        document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
            window.open = cordova.InAppBrowser.open;
        }
        window.open = cordova.InAppBrowser.open;
    }

    private onAuthStateChanged(user: any) {
        console.log(user);
        this.onAuthChanged.next(user);
    }

    public signIn() {
        let provider = new firebase.auth.GoogleAuthProvider();
        return this.auth.signInWithRedirect(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });


    }

    public signInUserPassword() {
        return this.auth.signInWithEmailAndPassword('user@gmail.com', 'password');
    }

    public signOut() {
        this.auth.signOut();
    }

}