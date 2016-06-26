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
var aluno_service_1 = require('../service/aluno-service');
var usuario_service_1 = require('../service/usuario-service');
var base_1 = require('../base/base');
var session_1 = require('../session/session');
var retificacao_falta_1 = require('../entity/retificacao-falta');
var RetifFaltasCreateAlunoPortal = (function () {
    function RetifFaltasCreateAlunoPortal(alunoService, usuarioService, session, router, elementRef) {
        this.alunoService = alunoService;
        this.usuarioService = usuarioService;
        this.session = session;
        this.router = router;
        this.elementRef = elementRef;
        this.retFalta = new retificacao_falta_1.RetificacaoFalta();
        this.usuario = null;
        this.usuario = this.session.getCurrentUser();
    }
    RetifFaltasCreateAlunoPortal.prototype.ngOnInit = function () {
        if (!this.isUsuarioAluno()) {
            this.router.navigate(['Home']);
        }
        jQuery(this.elementRef.nativeElement).find('#datePicker').datepicker({
            format: 'dd/mm/yyyy'
        });
    };
    RetifFaltasCreateAlunoPortal.prototype.isUsuarioAluno = function () {
        return this.usuarioService.isUsuarioAluno(this.usuario);
    };
    RetifFaltasCreateAlunoPortal.prototype.salvarSolicitacao = function () {
        var _this = this;
        this.alunoService.solicitarRetificacaoFalta(this.retFalta)
            .then(function (retificacaoFalta) {
            _this.voltar();
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    RetifFaltasCreateAlunoPortal.prototype.voltar = function () {
        window.history.back();
    };
    RetifFaltasCreateAlunoPortal = __decorate([
        core_1.Component({
            templateUrl: 'app/retificacao-faltas/retif-faltas-create-aluno.html',
            directives: [base_1.BasePage]
        }), 
        __metadata('design:paramtypes', [aluno_service_1.AlunoService, usuario_service_1.UsuarioService, session_1.Session, router_deprecated_1.Router, core_1.ElementRef])
    ], RetifFaltasCreateAlunoPortal);
    return RetifFaltasCreateAlunoPortal;
}());
exports.RetifFaltasCreateAlunoPortal = RetifFaltasCreateAlunoPortal;
//# sourceMappingURL=retif-faltas-create-aluno.js.map