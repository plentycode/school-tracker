import { Injectable, In } from '@angular/core';
import './IFirebase'
import 'firebase';
import { Observable, Subject } from 'rxjs';

declare var firebase: IFirebase;

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
    }

    private onAuthStateChanged(user: any) {
        console.log(user);
        this.onAuthChanged.next(user);
    }

    public signIn() {
        let provider = new firebase.auth.GoogleAuthProvider();
        return this.auth.signInWithPopup(provider).catch((err)=> {
            alert(err)
        });
    }
    
    public signInUserPassword() {
       return this.auth.signInWithEmailAndPassword('user@gmail.com', 'password');
    }

    public signOut() {
        this.auth.signOut();
    }

}