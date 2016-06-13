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
var notas_1 = require('./notas/notas');
var historico_escolar_1 = require('./historico-escolar/historico-escolar');
var grade_curricular_1 = require('./grade-curricular/grade-curricular');
var logged_in_outlet_1 = require('./routing/logged-in-outlet');
var login_service_1 = require('./service/login-service');
var aluno_service_1 = require('./service/aluno-service');
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'portal-aluno',
            template: "\n\t\t<router-outlet></router-outlet>\n\t",
            directives: [logged_in_outlet_1.LoggedInRouterOutlet, router_deprecated_1.RouterLink],
            providers: [router_deprecated_1.ROUTER_PROVIDERS, login_service_1.LoginService, aluno_service_1.AlunoService]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', redirectTo: ['/Home'] },
            { path: '/home', name: 'Home', component: home_1.HomePortal, useAsDefault: true },
            { path: '/login', name: 'Login', component: login_1.LoginPortal },
            { path: '/notas', name: 'Notas', component: notas_1.NotasPortal },
            { path: '/historico', name: 'HistoricoEscolar', component: historico_escolar_1.HistoricoEscolarPortal },
            { path: '/grade', name: 'GradeCurricular', component: grade_curricular_1.GradeCurricularPortal }
        ]), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map