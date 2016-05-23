import {Page} from 'ionic-angular';
import {FirebaseService} from './../../core/firebase.service';
import { Observable } from 'rxjs';

@Page({
  templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 {
  loggedUser: any;
  constructor(private _firebaseService: FirebaseService) {
    this.loggedUser = null;

    this._firebaseService.onAuthChanged.subscribe((user) => { this.onAuthChanged(user) })
  }
  public signIn() {
    this._firebaseService.signIn();
  }

  public signOut() {
    this._firebaseService.signOut();
  }
  
  public openUrl () {
    window.open('http://www.google.com', '_system');
  }

  private onAuthChanged(user: any) {
    this.loggedUser = user;
  }
  
  

}
