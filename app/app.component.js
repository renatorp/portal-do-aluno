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
var session_1 = require('./session/session');
var router_deprecated_1 = require('@angular/router-deprecated');
var home_1 = require('./home/home');
var login_1 = require('./login/login');
var notas_1 = require('./notas/notas');
var retificacao_faltas_1 = require('./retificacao-faltas/retificacao-faltas');
var historico_escolar_1 = require('./historico-escolar/historico-escolar');
var grade_curricular_1 = require('./grade-curricular/grade-curricular');
var retif_faltas_create_aluno_1 = require('./retificacao-faltas/retif-faltas-create-aluno');
var retif_faltas_edit_prof_1 = require('./retificacao-faltas/retif-faltas-edit-prof');
var logged_in_outlet_1 = require('./routing/logged-in-outlet');
var login_service_1 = require('./service/login-service');
var aluno_service_1 = require('./service/aluno-service');
var usuario_service_1 = require('./service/usuario-service');
var disciplina_service_1 = require('./service/disciplina-service');
var AppComponent = (function () {
    function AppComponent(router, loginService, session, usuarioService) {
        this.router = router;
        this.loginService = loginService;
        this.session = session;
        this.usuarioService = usuarioService;
        this.title = 'Portal do Aluno';
    }
    AppComponent.prototype.ngOnInit = function () {
        var user = this.session.getCurrentUser();
        if (user == null || user.IdPerfil == null) {
            this.logout();
        }
    };
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.loginService.logout(function () { return _this.router.navigateByUrl('/login'); });
    };
    AppComponent.prototype.isRouterActive = function (path) {
        return this.router.isRouteActive(this.router.generate([path]));
    };
    AppComponent.prototype.isUsuarioAluno = function () {
        return this.usuarioService.isUsuarioAluno(this.session.getCurrentUser());
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'portal-aluno',
            templateUrl: 'app/app.component.html',
            directives: [logged_in_outlet_1.LoggedInRouterOutlet, router_deprecated_1.RouterLink],
            providers: [router_deprecated_1.ROUTER_PROVIDERS,
                login_service_1.LoginService,
                aluno_service_1.AlunoService,
                usuario_service_1.UsuarioService,
                disciplina_service_1.DisciplinaService]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', redirectTo: ['/Home'] },
            { path: '/home', name: 'Home', component: home_1.HomePortal, useAsDefault: true },
            { path: '/login', name: 'Login', component: login_1.LoginPortal },
            { path: '/notas', name: 'Notas', component: notas_1.NotasPortal },
            { path: '/historico', name: 'HistoricoEscolar', component: historico_escolar_1.HistoricoEscolarPortal },
            { path: '/grade', name: 'GradeCurricular', component: grade_curricular_1.GradeCurricularPortal },
            { path: '/retificacao', name: 'RetificacaoFaltas', component: retificacao_faltas_1.RetificacaoFaltasPortal },
            { path: '/retificacao/aprovar', name: 'RetifFaltasEditProf', component: retif_faltas_edit_prof_1.RetifFaltasEditProfPortal },
            { path: '/retificacao/criar', name: 'RetifFaltasCreateAluno', component: retif_faltas_create_aluno_1.RetifFaltasCreateAlunoPortal }
        ]), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, login_service_1.LoginService, session_1.Session, usuario_service_1.UsuarioService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map