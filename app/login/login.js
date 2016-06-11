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
var login_service_1 = require('../service/login-service');
var LoginPortal = (function () {
    function LoginPortal(router, http, loginService) {
        this.router = router;
        this.http = http;
        this.loginService = loginService;
        this.title = 'Portal do Aluno';
    }
    LoginPortal.prototype.login = function (event, username, password) {
        var _this = this;
        event.preventDefault();
        this.loginService.login(username, password, function () { return _this.router.parent.navigateByUrl('/home'); });
    };
    LoginPortal = __decorate([
        core_1.Component({
            selector: 'login-portal',
            templateUrl: 'app/login/login.html',
            directives: [router_deprecated_1.RouterLink, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, http_1.Http, login_service_1.LoginService])
    ], LoginPortal);
    return LoginPortal;
}());
exports.LoginPortal = LoginPortal;
//# sourceMappingURL=login.js.map