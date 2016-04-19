import {Page} from 'ionic-angular'
import {LoginComponent} from './login.component.ts'
import {RegisterComponent} from './register.component.ts'

@Page({
	templateUrl: 'build/main/main.html',
	directives: [RegisterComponent, LoginComponent]
})
export class MainPage {
	whichPage: string = 'login'
}