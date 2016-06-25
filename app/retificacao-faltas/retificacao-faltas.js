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
var aluno_service_1 = require('../service/aluno-service');
var usuario_service_1 = require('../service/usuario-service');
var base_1 = require('../base/base');
var str2date_pipe_1 = require('../pipes/str2date-pipe');
var session_1 = require('../session/session');
var RetificacaoFaltasPortal = (function () {
    function RetificacaoFaltasPortal(alunoService, usuarioService, session) {
        this.alunoService = alunoService;
        this.usuarioService = usuarioService;
        this.session = session;
        this.listaRetificacao = [];
        this.usuario = null;
        this.usuario = this.session.getCurrentUser();
    }
    RetificacaoFaltasPortal.prototype.ngOnInit = function () {
        var _this = this;
        var user = this.session.getCurrentUser();
        if (user && user.IdMatriculaAtual) {
            this.alunoService.getRetificacoesFaltas(user.IdMatriculaAtual).then(function (listaRetificacao) {
                if (_this.isUsuarioProfessor()) {
                    _this.listaRetificacao = listaRetificacao;
                }
                else {
                    _this.listaRetificacao = listaRetificacao.filter(function (item) { return _this.isExibirRegistro(item); });
                }
            });
        }
    };
    RetificacaoFaltasPortal.prototype.isUsuarioProfessor = function () {
        return this.usuarioService.isUsuarioProfessor(this.usuario);
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
    RetificacaoFaltasPortal = __decorate([
        core_1.Component({
            templateUrl: 'app/retificacao-faltas/retificacao-faltas.html',
            directives: [base_1.BasePage],
            pipes: [str2date_pipe_1.Str2DatePipe]
        }), 
        __metadata('design:paramtypes', [aluno_service_1.AlunoService, usuario_service_1.UsuarioService, session_1.Session])
    ], RetificacaoFaltasPortal);
    return RetificacaoFaltasPortal;
}());
exports.RetificacaoFaltasPortal = RetificacaoFaltasPortal;
//# sourceMappingURL=retificacao-faltas.js.map