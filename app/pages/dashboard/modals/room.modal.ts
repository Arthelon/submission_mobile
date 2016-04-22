import {Modal, NavController, ViewController, Page, Storage, LocalStorage} from 'ionic-angular';
import {ControlGroup, AbstractControl, FormBuilder, Validators} from 'angular2/common'
import {AuthHttp} from 'angular2-jwt'
import {CONFIG} from '../../../config.ts'

@Page({
	templateUrl: 'build/pages/dashboard/modals/room.modal.html'
})
export class RoomModal {
	viewCtrl: ViewController
	roomForm: ControlGroup
	path: AbstractControl
	name: AbstractControl
	desc: AbstractControl
	error: string

	constructor(viewCtrl: ViewController, fb: FormBuilder, private auth: AuthHttp) {
		this.viewCtrl = viewCtrl;
		this.roomForm = fb.group({
			'path': ['', Validators.required],
			'name': ['', Validators.required],
			'desc': ['']
		})
		this.path = this.roomForm.controls['path']
		this.name = this.roomForm.controls['name']
		this.desc = this.roomForm.controls['desc']
	}

	close() {
		this.viewCtrl.dismiss();
	}

	submitData(data) {
		let storage = new Storage(LocalStorage)
		console.log(storage.get('id_token'))
		this.auth.post(CONFIG.SERVER_URL + '/api/rooms', JSON.stringify(data)).subscribe(succ => {
			this.close()
		}, err => {
			this.error = err.data.error
		})
	}
}