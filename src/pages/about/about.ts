import { StorageloginProvider } from './../../providers/storagelogin/storagelogin';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,  private file: StorageloginProvider, private app : App) {

  }
  Deslogar(){
    this.file.deslogar("chave");
    this.app.getRootNav().setRoot(LoginPage); 
  }
}
