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
var home_1 = require('./home/home');
var login_1 = require('./login/login');
var logged_in_outlet_1 = require('./routing/logged-in-outlet');
var login_service_1 = require('./service/login-service');
var aluno_service_1 = require('./service/aluno-service');
var AppComponent = (function () {
    function AppComponent(router, loginService, alunoService) {
        this.router = router;
        this.loginService = loginService;
        this.alunoService = alunoService;
        this.title = 'Portal do Aluno';
        this.alunoService.getNotas();
    }
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.loginService.logout(function () { return _this.router.navigateByUrl('/login'); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'portal-aluno',
            template: "\n\t\t<h1>{{title}}</h1>\n\t\t<nav>\n\t\t\t<a [routerLink]=\"['Home']\">Home</a>\n\t\t\t<a [routerLink]=\"['Login']\">Login</a>\n\t\t\t<a href=\"\" (click)=\"logout()\">Logout</a>\n\t\t</nav>\n\t\t<router-outlet></router-outlet>\n\t",
            styleUrls: ['app/app.component.css'],
            directives: [logged_in_outlet_1.LoggedInRouterOutlet, router_deprecated_1.RouterLink],
            providers: [router_deprecated_1.ROUTER_PROVIDERS, login_service_1.LoginService, aluno_service_1.AlunoService]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', redirectTo: ['/Home'] },
            { path: '/home', name: 'Home', component: home_1.HomePortal, useAsDefault: true },
            { path: '/login', name: 'Login', component: login_1.LoginPortal }
        ]), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, login_service_1.LoginService, aluno_service_1.AlunoService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map