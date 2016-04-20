import {Component} from 'angular2/core'
import {FORM_DIRECTIVES, Validators, AbstractControl, ControlGroup, FormBuilder, Control} from 'angular2/common'
import {NavController, IONIC_DIRECTIVES} from 'ionic-angular'
import {ValidationService} from '../services/validators.ts'
import {RegisterService} from './register.service.ts'

@Component({
	templateUrl: 'build/main/register.html',
	directives: [IONIC_DIRECTIVES],
	selector: 'register-comp',
	providers: [RegisterService]
})
export class RegisterComponent {
	registerForm: ControlGroup
	//Form fields
	username: AbstractControl
	password: AbstractControl
	password2: AbstractControl
	email: AbstractControl
	first_name: AbstractControl
	last_name: AbstractControl

	success: string
	error: string

	//Password validation function
	matchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
		return (group: ControlGroup) => {
			let passwordInput = group.controls[passwordKey];
			let passwordConfirmationInput = group.controls[passwordConfirmationKey];
			if (passwordInput.value !== passwordConfirmationInput.value) {
				return passwordConfirmationInput.setErrors({ notEquivalent: true })
			}
		}
	}3
	onSubmit(val: string) {
		this.rs.doRegister(val).subscribe(succ => {
			console.log(succ)
			this.success = succ.json().success
			this.generateForm()
		}, err => {
			this.error = err.json().error
		})
	}

	generateForm(): void {
		//ControlGroup setup for form fields
		this.registerForm = this.fb.group({
			'username': ['', Validators.required],
			'password': ['', Validators.compose([Validators.required, Validators.minLength(8)])],
			'confirmPassword': ['', Validators.required],
			'email': ['', Validators.compose([Validators.required, ValidationService.emailValidator])],
			'first_name': ['', Validators.required],
			'last_name': ['', Validators.required]
		}, { validator: this.matchingPasswords('password', 'confirmPassword') })
		//Fields initialized with Control instances
		this.password = this.registerForm.controls['password']
		this.password2 = this.registerForm.controls['confirmPassword']
		this.first_name = this.registerForm.controls['first_name']
		this.last_name = this.registerForm.controls['last_name']
		this.email = this.registerForm.controls['email']
		this.username = this.registerForm.controls['username']
	}

	constructor(private fb: FormBuilder, private rs: RegisterService) {
		this.generateForm()
	}

}