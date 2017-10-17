import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ApiServiceProvider]
})
export class HomePage {
  username: string;
  password: string;
  constructor(public navCtrl: NavController, public api: ApiServiceProvider) {
  
  }
  login() {
    this.api.login()
      .then(data => {});
   }
}
