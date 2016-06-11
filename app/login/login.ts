import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router-deprecated';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { contentHeaders } from '../common/headers';
import { LoginService } from '../service/login-service';

@Component({
  selector: 'login-portal',
  templateUrl: 'app/login/login.html',
    directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES ]

})
export class LoginPortal{
  title = 'Portal do Aluno'
	constructor(public router: Router, 
              public http: Http, 
              public loginService: LoginService) {}

	login(event, username, password) {
    event.preventDefault();
    this.loginService.login(username, password, () => this.router.parent.navigateByUrl('/home'))      
  }

}

