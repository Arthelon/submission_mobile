import {Page, Loading, NavController, Alert, IonicApp, Modal} from 'ionic-angular'
import {AuthHttp, JwtHelper} from 'angular2-jwt'
import {CONFIG} from '../../config.ts'

import {Http} from 'angular2/http'
import {AuthService} from '../../services/auth.service.ts'

import {RoomPage} from './room.component.ts'
import {RoomModal} from './modals/room.modal.ts'


@Page({
	templateUrl: 'build/pages/dashboard/dashboard.html',
	providers: [AuthService]
})
export class DashboardPage {
	rooms = []

	constructor(private authHttp: AuthHttp, private nav: NavController, private app: IonicApp, private as: AuthService) {}

	ngOnInit() {
		let loading = Loading.create({
			content: 'Loading rooms...'
		})
		this.as.login({username: 'Arthelon', password: 'test'}).then(() => {
			this.authHttp.get(CONFIG.SERVER_URL + '/api/rooms')
				.subscribe(succ => {
					console.log('Room request succeeded')
					loading.dismiss()
					this.rooms = succ.json().rooms
				}, err => {
					console.log('error occured')
					loading.dismiss()
					let alert = Alert.create({
						title: 'Unable to retrieve rooms',
						message: 'Please restart app'
					})
					this.nav.present(alert)
				})
		})
		this.nav.present(loading)
	}
	onRoomDelete(index: number) {
		let confirmDelete = Alert.create({
			title: 'Are you sure you want to delete this room?',
			buttons: ['Return', {
				text: 'Confirm',
				handler: () => {
					this.authHttp.delete(CONFIG.SERVER_URL + '/api/rooms', {
						body: JSON.stringify({room_path: this.rooms[index].path})
					}).subscribe(succ => {
						this.rooms.splice(index, 1)
						console.log(succ.json().success)
					}, err => {
						console.log(this.rooms[index].path)
						console.log(err.json().error)
					})

				}
			}]
		})
		this.nav.present(confirmDelete)
	}
	createRoom() {
		let roomModal = Modal.create(RoomModal)
		this.nav.present(roomModal)
	}
	openRoom(room: any) {
		this.nav.push(RoomPage, {room_path: room.path})
	}
}