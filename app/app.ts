import 'es6-shim';
import {App, Platform} from 'ionic-angular';
import {OpaqueToken, provide} from 'angular2/core'
import {StatusBar} from 'ionic-native';
import {MainPage} from './main/main.component.ts';


@App({
  template: '<ion-nav class="ios" [root]="rootPage"></ion-nav>',
  config: {}, // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  rootPage: any = MainPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
