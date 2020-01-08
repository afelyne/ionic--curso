import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
/**
 * Generated class for the DetallesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalles',
  templateUrl: 'detalles.html',
})
export class DetallesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallesPage');
  }

  showAlert(){
    const alert = this.alertCtrl.create({
      title: 'Buen trabajo!',
      subTitle: 'Vamos bien, no pares!',
      inputs: [
        {
          name: 'nombre',
          placeholder: 'Nombre'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancelado');
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            console.log('Guardado');
          }
        }
      ]
    });
    alert.present();
  }
}
