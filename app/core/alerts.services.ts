import { Injectable } from '@angular/core'; 
import {NavController, Alert} from "ionic-angular/index";

@Injectable()
export class AlertsServices {

    constructor(public _nav:NavController) {

    }

    public showAlert(title:string, message:string) {
        let alert = Alert.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        this._nav.present(alert);
    }
}