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
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'Portal do Aluno';
    }
    AppComponent.prototype.logout = function () {
        // Method to be called when the user wants to logout
        // Logging out means just deleting the JWT from localStorage and redirecting the user to the Login page
        localStorage.removeItem('jwt');
        this.router.navigateByUrl('/login');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'portal-aluno',
            template: "\n\t\t<h1>{{title}}</h1>\n\t\t<nav>\n\t\t\t<a [routerLink]=\"['Home']\">Home</a>\n\t\t\t<a [routerLink]=\"['Login']\">Login</a>\n\t\t\t<a href=\"\" (click)=\"logout()\">Logout</a>\n\t\t</nav>\n\t\t<router-outlet></router-outlet>\n\t",
            styleUrls: ['app/app.component.css'],
            directives: [logged_in_outlet_1.LoggedInRouterOutlet, router_deprecated_1.RouterLink],
            providers: [router_deprecated_1.ROUTER_PROVIDERS]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', redirectTo: ['/Home'] },
            { path: '/home', name: 'Home', component: home_1.HomePortal, useAsDefault: true },
            { path: '/login', name: 'Login', component: login_1.LoginPortal }
        ]), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map