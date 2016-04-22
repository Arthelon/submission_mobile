import {Injectable} from 'angular2/core'
import {Http, Response, Headers} from 'angular2/http'
import {CONFIG} from '../config.ts'

@Injectable()
export class RegisterService {
	constructor(private http: Http) {}
	doRegister(val) {
		let headers = new Headers()
		headers.append('Content-Type', 'application/json')

		return this.http.post(CONFIG.SERVER_URL + '/api/register', JSON.stringify(val), {
			headers: headers
		})
	}
}