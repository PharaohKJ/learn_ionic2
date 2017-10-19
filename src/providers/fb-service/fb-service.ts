import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

/*
  Generated class for the FbServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FbServiceProvider {

  constructor(private fb: Facebook) {
    console.log('Hello FbServiceProvider Provider');
  }

  login() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
      .catch(e => console.log('Error logging into Facebook', e));

    this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
  }


}
