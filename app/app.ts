import 'es6-shim';
import {App, Platform, MenuController} from 'ionic-angular';
import {OpaqueToken, provide} from 'angular2/core'
import {StatusBar} from 'ionic-native';
import {MainPage} from './main/main.component.ts';
import {TabsPage} from './pages/tabs/tabs.ts'
import {AuthHttp, AuthConfig, AUTH_PROVIDERS} from 'angular2-jwt';
import {Http} from 'angular2/http'


@App({
  templateUrl: 'build/app.html',
  config: {}, // http://ionicframework.com/docs/v2/api/config/Config/
  providers: [
    provide(AuthHttp, {
      useFactory: (http) => {
        return new AuthHttp(new AuthConfig({
          globalHeaders: [{ 'Content-Type': 'application/json' }]
        }), http);
      },
      deps: [Http]
    })
  ]
})

export class MyApp {
  // rootPage: any = MainPage;
  rootPage: any = TabsPage

  constructor(platform: Platform, private menu: MenuController) {
    this.menu.enable(true)
    platform.ready().then(() => {
      // StatusBar.styleDefault();
    });
  }
}
