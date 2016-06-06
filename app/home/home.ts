import { Component } from '@angular/core';

// Teste de conexão com servidor via get
import { CORE_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

@Component({
  selector: 'home-portal',

  // Teste de conexão com servidor via get
  directives: [CORE_DIRECTIVES],
  template: `
    <h1>Home</h1>
    <div>
  <div class="home jumbotron centered">
    
    <p>Click any of the buttons to call an API and get a response</p>
    <p><a class="btn btn-primary btn-lg" role="button" (click)="callSecuredApi()">Call Secure API</a></p>
    
    <h2 *ngIf="response">The response of calling the <span class="red">{{api}}</span> API is:</h2>
    <h3 *ngIf="response">{{response}}</h3>
  </div>
</div>
  `,



})
export class HomePortal {

	// Teste de conexão com servidor via get
  response: string;

  constructor(public http: Http, public authHttp: AuthHttp) { 
  }


  callSecuredApi() {
  		let url = 'http://localhost:3001/api/protected/random-quote';

      // For protected routes, use AuthHttp
      this.authHttp.get(url)
        .subscribe(
          response => this.response = response.text(),
          error => this.response = error.text()
        );
   }

}

