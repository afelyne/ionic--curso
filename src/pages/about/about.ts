import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetallesPage } from '../detalles/detalles';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  goToDetalles(){
    this.navCtrl.push(DetallesPage);
  }

}
