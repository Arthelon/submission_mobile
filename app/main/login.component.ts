import {Component, provide, OpaqueToken} from 'angular2/core'
import {FORM_DIRECTIVES, Validators, AbstractControl, ControlGroup, FormBuilder, Control} from 'angular2/common'
import {NavController, IONIC_DIRECTIVES} from 'ionic-angular'
import {Http} from 'angular2/http'

@Component({
	templateUrl: 'build/main/login.html',
	directives: [IONIC_DIRECTIVES],
	selector: 'login-comp'
})
export class LoginComponent {
	loginForm: ControlGroup
	username: AbstractControl
	password: AbstractControl

	constructor(private fb: FormBuilder, private http: Http) {
		this.loginForm = fb.group({
			'username': ['', Validators.required],
			'password': ['', Validators.required]
		})
		this.username = this.loginForm.controls['username']
		this.password = this.loginForm.controls['password']
	}

	onSubmit(val) {
		console.log(val)
		// this.http.post(this.CONFIG.SERVER_URL, val)
	}
}