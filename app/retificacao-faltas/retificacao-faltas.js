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
var retificacao_faltas_service_1 = require('../service/retificacao-faltas-service');
var usuario_service_1 = require('../service/usuario-service');
var str2date_pipe_1 = require('../pipes/str2date-pipe');
var session_1 = require('../session/session');
var router_deprecated_1 = require('@angular/router-deprecated');
var RetificacaoFaltasPortal = (function () {
    function RetificacaoFaltasPortal(retificacaoFaltasService, usuarioService, session, router) {
        this.retificacaoFaltasService = retificacaoFaltasService;
        this.usuarioService = usuarioService;
        this.session = session;
        this.router = router;
        this.listaRetificacao = [];
        this.usuario = null;
        this.usuario = this.session.getCurrentUser();
    }
    RetificacaoFaltasPortal.prototype.ngOnInit = function () {
        var _this = this;
        var user = this.session.getCurrentUser();
        if (user && user.IdMatriculaAtual && this.isUsuarioAluno()) {
            this.retificacaoFaltasService
                .getRetificacoesFaltasByMatricula(user.IdMatriculaAtual)
                .then(function (listaRetificacao) {
                _this.listaRetificacao = listaRetificacao
                    .filter(function (item) { return _this.isExibirRegistro(item); });
            });
        }
        else {
            if (this.isUsuarioProfessor()) {
                this.retificacaoFaltasService.getTodasSolicitacoes().then(function (listaRetificacao) { return _this.listaRetificacao = listaRetificacao; });
            }
        }
    };
    RetificacaoFaltasPortal.prototype.isUsuarioProfessor = function () {
        return this.usuarioService.isUsuarioProfessor(this.usuario);
    };
    RetificacaoFaltasPortal.prototype.isUsuarioAluno = function () {
        return this.usuarioService.isUsuarioAluno(this.usuario);
    };
    RetificacaoFaltasPortal.prototype.isExibirRegistro = function (ret) {
        if (ret) {
            if (this.isUsuarioProfessor()) {
                return true;
            }
            if (this.usuario != null && this.usuario.IdMatriculaAtual == ret.IdMatricula) {
                return true;
            }
        }
        return false;
    };
    RetificacaoFaltasPortal.prototype.criarNovaSolicitacao = function () {
        if (this.isUsuarioAluno()) {
            this.router.parent.navigate(['RetifFaltasCreateAluno']);
        }
    };
    RetificacaoFaltasPortal.prototype.acessarRetificacao = function (retItem) {
        if (this.isUsuarioProfessor()) {
            this.router.parent.navigate(['RetifFaltasEditProf', { id: retItem.Id }]);
        }
    };
    RetificacaoFaltasPortal = __decorate([
        core_1.Component({
            templateUrl: 'app/retificacao-faltas/retificacao-faltas.html',
            pipes: [str2date_pipe_1.Str2DatePipe],
            providers: [retificacao_faltas_service_1.RetificacaoFaltasService]
        }), 
        __metadata('design:paramtypes', [retificacao_faltas_service_1.RetificacaoFaltasService, usuario_service_1.UsuarioService, session_1.Session, router_deprecated_1.Router])
    ], RetificacaoFaltasPortal);
    return RetificacaoFaltasPortal;
}());
exports.RetificacaoFaltasPortal = RetificacaoFaltasPortal;
//# sourceMappingURL=retificacao-faltas.js.map