import 'es6-shim';
import {App, Platform} from 'ionic-angular';
import {OpaqueToken, provide} from 'angular2/core'
import {StatusBar} from 'ionic-native';
import {MainPage} from './main/main.component.ts';
import {AuthHttp, AuthConfig, AUTH_PROVIDERS} from 'angular2-jwt';
import {Http} from 'angular2/http'


@App({
  template: '<ion-nav id="rootNav" class="ios" [root]="rootPage"></ion-nav>',
  config: {}, // http://ionicframework.com/docs/v2/api/config/Config/
  providers: [
    provide(AuthHttp, {
      useFactory: (http) => {
        return new AuthHttp(new AuthConfig({
          tokenName: 'JWT',
          globalHeaders: [{ 'Content-Type': 'application/json' }],
          noJwtError: true,
          noTokenScheme: true
        }), http);
      },
      deps: [Http]
    })
  ]
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
