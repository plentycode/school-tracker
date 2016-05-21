import { Injectable } from '@angular/core';
import 'firebase';

declare var firebase: IFirebase;

@Injectable()
export class FirebaseService {
private auth: any;
private database: any;
private storage: any;
    constructor() {

        let config = {
            apiKey: "AIzaSyCME9UDOaB90FpTxhfCb3_8el_p0UO8zwA",
            authDomain: "school-tracker.firebaseapp.com",
            databaseURL: "https://school-tracker.firebaseio.com",
            storageBucket: "school-tracker.appspot.com",
        };
        
        firebase.initializeApp(config);
        this.auth = firebase.auth();
        this.database = firebase.database();
        this.storage = firebase.storage();
        this.auth.onAuthStateChanged((user: any) => this.onAuthStateChanged(user));
    }
    
    private onAuthStateChanged(user: any) {
        console.log(user);
    }
    
    public signIn() {
        let provider = new firebase.auth.GoogleAuthProvider();
        this.auth.signInWithPopup(provider);
    }

}