import {tokenNotExpired, JwtHelper} from 'angular2-jwt';
import {Injectable} from 'angular2/core'
import {Http, Headers} from 'angular2/http'
import {CONFIG} from '../config.ts'
import {Storage, LocalStorage} from 'ionic-angular'
import {NavController} from 'ionic-angular'
import {MainPage} from '../main/main.component.ts'

@Injectable()
export class AuthService {
	local: Storage = new Storage(LocalStorage)
	contentHeader: Headers = new Headers({'Content-Type': 'application/json'})

	helper: JwtHelper = new JwtHelper()
	constructor(private http: Http, private nav: NavController) {}

	public static authenticated() {
		return tokenNotExpired();
	}

	login(val): Promise<string> {
		return new Promise((resolve, reject) => {
			this.http.post(CONFIG.SERVER_URL + '/api/login', JSON.stringify(val), { headers: this.contentHeader })
				.subscribe(succ => {
					this.local.set('id_token', succ.json().token)
					resolve(succ.json().success)
				}, err => {
					reject(err.json().error)
				})
		})
	}

	logout() {
		this.local.remove('id_token')
		this.nav.setRoot(MainPage)
	}


}
