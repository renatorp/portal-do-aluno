import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { contentHeaders } from '../common/headers';
import { Session } from '../session/session';
import { Usuario } from '../entity/usuario';

@Injectable()
export class LoginService {
	
	private urlLogin = 'https://sistemaacademico.azurewebsites.net/api/Usuarios/Autenticar';

	constructor(private http: Http, private session: Session){}

	login(username: string, password: string, callbackSuccess) {
		let body = JSON.stringify({ usuario: username, senha: password });
		let headers = contentHeaders;
	    this.http.post(this.urlLogin, body, { headers: headers })
	      .subscribe(
	        response => {

	          let json = response.json();
	          let token = json.Token;
	          json.Token = null;
	          let userObj = <Usuario>JSON.parse(JSON.stringify(json));
	          this.session.createSession(userObj, token)
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