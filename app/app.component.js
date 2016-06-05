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
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Portal do Aluno';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'portal-aluno',
            template: "\n\t\t<h1>{{title}}</h1>\n\t\t<nav>\n\t\t\t<a>Home</a>\n\t\t\t<a>Heroes</a>\n\t\t</nav>\n\t\t<router-outlet></router-outlet>\n\t",
            styleUrls: ['app/app.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [router_deprecated_1.ROUTER_PROVIDERS]
        }),
        router_deprecated_1.RouteConfig([]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*
 {
          path: '/dashboard',
          name: 'Dashboard',
          component: DashboardComponent,
          useAsDefault: true
        }
<a [routerLink]="['Dashboard']">Dashboard</a>
*/
//# sourceMappingURL=app.component.js.map