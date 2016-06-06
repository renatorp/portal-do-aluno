import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router-deprecated';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { contentHeaders } from '../common/headers';

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

	constructor(public router: Router, public http: Http) {}

	login(event, username, password) {
    event.preventDefault();
    let body = JSON.stringify({ username, password });
    this.http.post('http://localhost:3001/sessions/create', body, { headers: contentHeaders })
      .subscribe(
        response => {
          localStorage.setItem('jwt', response.json().id_token);
          this.router.parent.navigateByUrl('/home');
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }

}

