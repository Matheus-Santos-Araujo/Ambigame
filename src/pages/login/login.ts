import { CadastroPage } from './../cadastro/cadastro';
import { HomePage } from './../home/home';
import { StorageloginProvider } from './../../providers/storagelogin/storagelogin';
import { Login } from './../../modelos/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  model: Login;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private file:StorageloginProvider) {
    this.model = new Login();
    this.model.id = "0";
    this.model.email  ='';
    this.model.senha  = '';
  }

  login() {
   
      if(this.model.email == "matheus@gmail.com" && this.model.senha == "12345") {
        this.toast.create({ message: 'Login realizado com sucesso.', position: 'botton', duration: 3000 }).present();  
        this.navCtrl.setRoot(TabsPage); 
        return this.file.logar(this.model); 
      } else {
        this.toast.create({ message: 'Dados inválidos...', position: 'botton', duration: 3000 }).present();  
      }  
  
    }
  
cadastro(){
  this.navCtrl.push(CadastroPage);
}
}
