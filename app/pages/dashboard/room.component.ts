import {Page, NavParams, MenuController} from 'ionic-angular'

@Page({
	templateUrl: 'build/pages/dashboard/room.html'
})
export class RoomPage {
	room_path: string

	constructor(navParams: NavParams, private menu: MenuController) {
		this.room_path = navParams.get('room_path')
	}

	toggleMenu() {
		this.menu.toggle('right')
	}

}