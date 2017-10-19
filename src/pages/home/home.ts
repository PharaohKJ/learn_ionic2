import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { FbServiceProvider } from '../../providers/fb-service/fb-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ApiServiceProvider, FbServiceProvider]
})
export class HomePage {
  username: string;
  password: string;
  constructor(public navCtrl: NavController, public api: ApiServiceProvider, public fb: FbServiceProvider) {

  }
  login() {
    this.fb.login();
   }
}
