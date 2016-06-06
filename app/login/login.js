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
var router_deprecated_1 = require('@angular/router-deprecated');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var headers_1 = require('../common/headers');
var LoginPortal = (function () {
    function LoginPortal(router, http) {
        this.router = router;
        this.http = http;
    }
    LoginPortal.prototype.login = function (event, username, password) {
        var _this = this;
        event.preventDefault();
        var body = JSON.stringify({ username: username, password: password });
        this.http.post('http://localhost:3001/sessions/create', body, { headers: headers_1.contentHeaders })
            .subscribe(function (response) {
            localStorage.setItem('jwt', response.json().id_token);
            _this.router.parent.navigateByUrl('/home');
        }, function (error) {
            alert(error.text());
            console.log(error.text());
        });
    };
    LoginPortal = __decorate([
        core_1.Component({
            selector: 'login-portal',
            template: "\n    \n<div class=\"login jumbotron center-block\">\n  <h1>Login</h1>\n  <form role=\"form\" (submit)=\"login($event, username.value, password.value)\">\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" #username class=\"form-control\" id=\"username\" placeholder=\"Username\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" #password class=\"form-control\" id=\"password\" placeholder=\"Password\">\n  </div>\n  <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n</form>\n</div>\n\n  ",
            directives: [router_deprecated_1.RouterLink, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, http_1.Http])
    ], LoginPortal);
    return LoginPortal;
}());
exports.LoginPortal = LoginPortal;
//# sourceMappingURL=login.js.map