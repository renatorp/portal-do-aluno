"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var angular2_jwt_1 = require('angular2-jwt');
var session_1 = require('./session/session');
var app_component_1 = require('./app.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    common_1.FORM_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    core_1.provide(angular2_jwt_1.AuthHttp, {
        useFactory: function (http) {
            return new angular2_jwt_1.AuthHttp(new angular2_jwt_1.AuthConfig({
                tokenName: 'jwt'
            }), http);
        },
        deps: [http_1.Http]
    }),
    session_1.Session
]);
// https://github.com/angular/angular-cli/issues/907   router-deprecated 
//# sourceMappingURL=main.js.map