import {Component, provide, OpaqueToken} from 'angular2/core'
import {FORM_DIRECTIVES, Validators, AbstractControl, ControlGroup, FormBuilder, Control} from 'angular2/common'
import {NavController, IONIC_DIRECTIVES} from 'ionic-angular'
import {Http} from 'angular2/http'
import {CONFIG} from '../config.ts'
import {LoginService} from './login.service.ts'

@Component({
	templateUrl: 'build/main/login.html',
	directives: [IONIC_DIRECTIVES],
	selector: 'login-comp',
	providers: [LoginService]
})
export class LoginComponent {
	loginForm: ControlGroup
	username: AbstractControl
	password: AbstractControl

	constructor(private fb: FormBuilder, private http: Http, private ls: LoginService) {
		this.loginForm = fb.group({
			'username': ['', Validators.required],
			'password': ['', Validators.required]
		})
		this.username = this.loginForm.controls['username']
		this.password = this.loginForm.controls['password']
	}

	onSubmit(val) {
		this.ls.doLogin(val)
	}
}