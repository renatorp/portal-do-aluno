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
var retificacao_faltas_service_1 = require('../service/retificacao-faltas-service');
var usuario_service_1 = require('../service/usuario-service');
var disciplina_service_1 = require('../service/disciplina-service');
var base_1 = require('../base/base');
var session_1 = require('../session/session');
var retificacao_falta_1 = require('../entity/retificacao-falta');
var RetifFaltasCreateAlunoPortal = (function () {
    function RetifFaltasCreateAlunoPortal(retificacaoFaltasService, usuarioService, session, router, elementRef, disciplinaService) {
        this.retificacaoFaltasService = retificacaoFaltasService;
        this.usuarioService = usuarioService;
        this.session = session;
        this.router = router;
        this.elementRef = elementRef;
        this.disciplinaService = disciplinaService;
        this.retFalta = new retificacao_falta_1.RetificacaoFalta();
        this.usuario = null;
        this.disciplinas = [];
        this.usuario = this.session.getCurrentUser();
    }
    RetifFaltasCreateAlunoPortal.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.isUsuarioAluno()) {
            this.router.navigate(['Home']);
        }
        jQuery(this.elementRef.nativeElement).find('#datePicker').datepicker({
            format: 'dd/mm/yyyy'
        });
        if (this.usuario && this.usuario.IdMatriculaAtual) {
            this.disciplinaService.getDisciplinasByMatricula(this.usuario.IdMatriculaAtual).then(function (disciplinas) { return _this.disciplinas = disciplinas; });
        }
    };
    RetifFaltasCreateAlunoPortal.prototype.isUsuarioAluno = function () {
        return this.usuarioService.isUsuarioAluno(this.usuario);
    };
    RetifFaltasCreateAlunoPortal.prototype.criarSolicitacao = function () {
        var _this = this;
        if (this.validarDados()) {
            this.retFalta.IdMatricula = this.usuario.IdMatriculaAtual;
            this.retificacaoFaltasService.solicitarRetificacaoFalta(this.retFalta)
                .then(function (retificacaoFalta) {
                _this.voltar();
            })
                .catch(function (error) { return alert('Ocorreu um erro:' + error); }); // TODO: Display error message
        }
    };
    RetifFaltasCreateAlunoPortal.prototype.validarDados = function () {
        if (this.retFalta.DataFalta == null || this.retFalta.IdOferta == null || this.retFalta.Justificativa == null) {
            alert("Todos os campos são obrigatórios!");
            return false;
        }
        return true;
    };
    RetifFaltasCreateAlunoPortal.prototype.voltar = function () {
        this.router.parent.navigate(['RetificacaoFaltas']);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', retificacao_falta_1.RetificacaoFalta)
    ], RetifFaltasCreateAlunoPortal.prototype, "retFalta", void 0);
    RetifFaltasCreateAlunoPortal = __decorate([
        core_1.Component({
            templateUrl: 'app/retificacao-faltas/retif-faltas-create-aluno.html',
            directives: [base_1.BasePage],
            providers: [retificacao_faltas_service_1.RetificacaoFaltasService]
        }), 
        __metadata('design:paramtypes', [retificacao_faltas_service_1.RetificacaoFaltasService, usuario_service_1.UsuarioService, session_1.Session, router_deprecated_1.Router, core_1.ElementRef, disciplina_service_1.DisciplinaService])
    ], RetifFaltasCreateAlunoPortal);
    return RetifFaltasCreateAlunoPortal;
}());
exports.RetifFaltasCreateAlunoPortal = RetifFaltasCreateAlunoPortal;
//# sourceMappingURL=retif-faltas-create-aluno.js.map