import { FormulariodescartePage } from './../formulariodescarte/formulariodescarte';
import { LoginPage } from './../login/login';
import { StorageloginProvider } from './../../providers/storagelogin/storagelogin';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the EmpresasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-empresas',
  templateUrl: 'empresas.html',
})
export class EmpresasPage {

  constructor(public navCtrl: NavController,  private file: StorageloginProvider, private app : App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpresasPage');
  }
  Deslogar(){
    this.file.deslogar("chave");
    this.app.getRootNav().setRoot(LoginPage); 
  }

  form(){
    this.navCtrl.push(FormulariodescartePage);
  }

}
