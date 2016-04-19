import {Component} from 'angular2/core'
import {FORM_DIRECTIVES, Validators, AbstractControl, ControlGroup, FormBuilder} from 'angular2/common'
import {NavController, IONIC_DIRECTIVES} from 'ionic-angular'

@Component({
	templateUrl: 'build/main/login.html',
	directives: [IONIC_DIRECTIVES],
	selector: 'login-comp'
})
export class LoginComponent {
	loginForm: ControlGroup
	username: AbstractControl
	password: AbstractControl

	constructor(fb: FormBuilder) {
		this.loginForm = fb.group({
			'username': ['', Validators.required],
			'password': ['', Validators.required]
		})
		this.username = this.loginForm.controls['username']
		this.password = this.loginForm.controls['password']
	}
}