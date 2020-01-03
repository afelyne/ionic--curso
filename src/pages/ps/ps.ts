import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ps',
  templateUrl: 'ps.html',
})
export class PsPage {

  items: Array<any> = [
    {
      titulo: "Gravity Rush",
      color: "#2881F3"
    },
    {
      titulo: "Horizon: Zero Down",
      color: "#28C8F3"
    },
    {
      titulo: "Last of Us",
      color: "#444"
    },
    {
      titulo: "Monster Hunter",
      color: "#999"
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PsPage');
  }

}
