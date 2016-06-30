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
var session_1 = require('../session/session');
var HistoricoEscolarPortal = (function () {
    function HistoricoEscolarPortal(alunoService, session) {
        this.alunoService = alunoService;
        this.session = session;
        this.listaHistorico = [];
        this.usuario = null;
    }
    HistoricoEscolarPortal.prototype.getDataAsDate = function (dateString) {
        return new Date(dateString);
    };
    HistoricoEscolarPortal.prototype.ngOnInit = function () {
        var _this = this;
        this.usuario = this.session.getCurrentUser();
        if (this.usuario && this.usuario.Id) {
            this.alunoService.getHistoricoEscolar(this.usuario.Id).then(function (listaHistorico) { return _this.listaHistorico = listaHistorico; });
        }
    };
    HistoricoEscolarPortal = __decorate([
        core_1.Component({
            templateUrl: 'app/historico-escolar/historico-escolar.html',
        }), 
        __metadata('design:paramtypes', [aluno_service_1.AlunoService, session_1.Session])
    ], HistoricoEscolarPortal);
    return HistoricoEscolarPortal;
}());
exports.HistoricoEscolarPortal = HistoricoEscolarPortal;
//# sourceMappingURL=historico-escolar.js.map