import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router-deprecated';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { contentHeaders } from '../common/headers';
import { LoginService } from '../service/login-service';

@Component({
  selector: 'login-portal',
  template: `
    
<div class="login jumbotron center-block">
  <h1>Login</h1>
  <form role="form" (submit)="login($event, username.value, password.value)">
  <div class="form-group">
    <label for="username">Username</label>
    <input type="text" #username class="form-control" id="username" placeholder="Username">
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" #password class="form-control" id="password" placeholder="Password">
  </div>
  <button type="submit" class="btn btn-default">Submit</button>
</form>
</div>

  `,
    directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES ]

})
export class LoginPortal{

	constructor(public router: Router, 
              public http: Http, 
              public loginService: LoginService) {}

	login(event, username, password) {
    event.preventDefault();
    this.loginService.login(username, password, () => this.router.parent.navigateByUrl('/home'))      
  }

}

