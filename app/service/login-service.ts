import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { contentHeaders } from '../common/headers';

@Injectable()
export class LoginService {
	
	private urlLogin = 'http://localhost:3001/sessions/create';

	constructor(private http: Http){}

	login(username: string, password: string, callbackSuccess) {
		let body = JSON.stringify({ username, password });
	    this.http.post(this.urlLogin, body, { headers: contentHeaders })
	      .subscribe(
	        response => {
	          localStorage.setItem('jwt', response.json().id_token);
	          callbackSuccess();
	        },
	        error => {
	          alert(error.text());
	          console.log(error.text());
	        }
	    );
	}

	logout(callbackSuccess) {

	    // Method to be called when the user wants to logout
	    // Logging out means just deleting the JWT from localStorage and redirecting the user to the Login page
	    localStorage.removeItem('jwt');
	    callbackSuccess();
	}

}