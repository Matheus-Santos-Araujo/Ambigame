import { TabsPage } from './../tabs/tabs';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { StorageloginProvider } from './../../providers/storagelogin/storagelogin';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  activate: boolean;
  usuario: any;

  constructor(public navCtrl: NavController,  private file: StorageloginProvider, private app : App) {

    this.file.pegaUsuario()
    .then((user: any) => {
      if(user != null) {
        this.activate = true;
        this.usuario = user.email;
        console.log(this.usuario);
      } else {
        this.app.getRootNav().setRoot(LoginPage);      }
    });

  }
  Deslogar(){
    this.file.deslogar("chave");
    this.app.getRootNav().setRoot(LoginPage); 
  }
}
