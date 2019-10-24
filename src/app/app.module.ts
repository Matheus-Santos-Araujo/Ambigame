import { FormulariodescartePage } from './../pages/formulariodescarte/formulariodescarte';
import { EmpresasPage } from './../pages/empresas/empresas';
import { LoginPage } from './../pages/login/login';
import { CadastroPage } from './../pages/cadastro/cadastro';
import { StorageloginProvider } from './../providers/storagelogin/storagelogin';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DescartePage } from './../pages/descarte/descarte';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DescartePage,
    LoginPage,
    CadastroPage,
    EmpresasPage,
    FormulariodescartePage
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    DescartePage,
    TabsPage,
    LoginPage,
    CadastroPage,
    EmpresasPage,
    FormulariodescartePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    StorageloginProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}