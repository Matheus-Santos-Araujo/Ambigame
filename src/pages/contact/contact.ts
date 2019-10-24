import { LoginPage } from './../login/login';
import { StorageloginProvider } from './../../providers/storagelogin/storagelogin';
import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,  private file: StorageloginProvider, private app : App) {

  }
  Deslogar(){
    this.file.deslogar("chave");
    this.app.getRootNav().setRoot(LoginPage); 
  }
}
