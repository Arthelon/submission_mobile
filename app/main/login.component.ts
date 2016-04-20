import {Component, provide, OpaqueToken} from 'angular2/core'
import {FORM_DIRECTIVES, Validators, AbstractControl, ControlGroup, FormBuilder, Control} from 'angular2/common'
import {NavController, IONIC_DIRECTIVES, IonicApp} from 'ionic-angular'
import {Http} from 'angular2/http'
import {CONFIG} from '../config.ts'
import {AuthService} from '../services/auth.service.ts'
import {TabsPage} from '../pages/tabs/tabs.ts'

@Component({
	templateUrl: 'build/main/login.html',
	directives: [IONIC_DIRECTIVES],
	selector: 'login-comp',
	providers: [AuthService]
})
export class LoginComponent {
	error: string

	loginForm: ControlGroup
	username: AbstractControl
	password: AbstractControl

	constructor(private app: IonicApp, private fb: FormBuilder, private auth: AuthService, private nav: NavController) {
		this.loginForm = fb.group({
			'username': ['', Validators.required],
			'password': ['', Validators.required]
		})
		this.username = this.loginForm.controls['username']
		this.password = this.loginForm.controls['password']
	}

	onSubmit(val) {
		this.auth.login(val).then(() => {
			let nav = this.app.getComponent('rootNav')
			nav.setRoot(TabsPage)
		}, err => {
			this.error = err
		})
	}
}