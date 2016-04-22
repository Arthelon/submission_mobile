import {Modal, NavController, ViewController, Page} from 'ionic-angular';
import {ControlGroup, AbstractControl, FormBuilder, Validators} from 'angular2/common'


@Page({
	templateUrl: 'build/pages/dashboard/modals/room.modal.html'
})
export class RoomModal {
	viewCtrl: ViewController
	roomForm: ControlGroup
	path: AbstractControl
	name: AbstractControl
	desc: AbstractControl

	constructor(viewCtrl: ViewController, fb: FormBuilder) {
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
}