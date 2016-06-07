"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var headers_1 = require('../common/headers');
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.urlLogin = 'http://localhost:3001/sessions/create';
    }
    LoginService.prototype.login = function (username, password, callbackSuccess) {
        var body = JSON.stringify({ username: username, password: password });
        this.http.post(this.urlLogin, body, { headers: headers_1.contentHeaders })
            .subscribe(function (response) {
            localStorage.setItem('jwt', response.json().id_token);
            callbackSuccess();
        }, function (error) {
            alert(error.text());
            console.log(error.text());
        });
    };
    LoginService.prototype.logout = function (callbackSuccess) {
        // Method to be called when the user wants to logout
        // Logging out means just deleting the JWT from localStorage and redirecting the user to the Login page
        localStorage.removeItem('jwt');
        callbackSuccess();
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login-service.js.map