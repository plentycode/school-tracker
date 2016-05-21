import {Page} from 'ionic-angular';
import {FirebaseService} from './../../core/firebase.service';

@Page({
  templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 {
  constructor(private _firebaseService: FirebaseService) {
    
  }
  public signIn() {
    this._firebaseService.signIn();
  }

}
