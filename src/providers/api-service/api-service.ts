import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ApiServiceProvider {
  public data: any;
  constructor(public http: Http) {
    console.log('Hello ApiServiceProvider Provider');
  }

  login() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('https://randomuser.me/api/?results=10')
        .map(res => res.json())
        .subscribe(data => {
          alert('認証OKと仮定')
          this.data = data;
          resolve(this.data);
        });
    });
  }
}
