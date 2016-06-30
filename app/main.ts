import { bootstrap }      from '@angular/platform-browser-dynamic';
import { provide } from '@angular/core';
import { FORM_PROVIDERS } from '@angular/common';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { AuthConfig, AuthHttp } from 'angular2-jwt';
import { Session } from './session/session';

import { AppComponent }   from './app.component';

import {enableProdMode} from '@angular/core';
enableProdMode();

bootstrap(AppComponent, [
	FORM_PROVIDERS,
    HTTP_PROVIDERS,
    provide(AuthHttp, { 
    	useFactory: (http) => {
    		return new AuthHttp(new AuthConfig({
    			tokenName: 'jwt'
    		}), http)
    	},
    	deps: [Http]
    }),
    Session
]
);


// https://github.com/angular/angular-cli/issues/907   router-deprecated