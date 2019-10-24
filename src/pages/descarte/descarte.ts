import { EmpresasPage } from './../empresas/empresas';
import { LoginPage } from './../login/login';
import { StorageloginProvider } from './../../providers/storagelogin/storagelogin';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the DescartePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-descarte',
  templateUrl: 'descarte.html',
})
export class DescartePage {

  constructor(public navCtrl: NavController,  private file: StorageloginProvider, private app : App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescartePage');
  }
  Deslogar(){
    this.file.deslogar("chave");
    this.app.getRootNav().setRoot(LoginPage); 
  }

  descartar(){
    this.navCtrl.push(EmpresasPage);
  }
}
