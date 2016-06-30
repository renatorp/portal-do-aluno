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
var usuario_service_1 = require('../service/usuario-service');
var retificacao_faltas_service_1 = require('../service/retificacao-faltas-service');
var session_1 = require('../session/session');
var retificacao_falta_1 = require('../entity/retificacao-falta');
var RetifFaltasEditProfPortal = (function () {
    function RetifFaltasEditProfPortal(usuarioService, session, router, routeParams, retificacaoFaltasService) {
        this.usuarioService = usuarioService;
        this.session = session;
        this.router = router;
        this.routeParams = routeParams;
        this.retificacaoFaltasService = retificacaoFaltasService;
        this.usuario = null;
        this.usuario = this.session.getCurrentUser();
    }
    RetifFaltasEditProfPortal.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.routeParams.get('id');
        if (!this.isUsuarioProfessor() || !id) {
            this.router.navigate(['Home']);
        }
        this.retificacaoFaltasService.getRetificacaoFaltasById(id).then(function (retificacaoFalta) { return _this.retFalta = retificacaoFalta; });
    };
    RetifFaltasEditProfPortal.prototype.isUsuarioProfessor = function () {
        return this.usuarioService.isUsuarioProfessor(this.usuario);
    };
    RetifFaltasEditProfPortal.prototype.aprovarRetificacao = function () {
        var _this = this;
        this.retificacaoFaltasService.aprovarRetificacao(this.retFalta)
            .then(function (retificacaoFalta) {
            _this.voltar();
        })
            .catch(function (error) { return alert('Ocorreu um erro:' + error); });
    };
    RetifFaltasEditProfPortal.prototype.rejeitarRetificacao = function () {
        var _this = this;
        this.retificacaoFaltasService.rejeitarRetificacao(this.retFalta)
            .then(function (retificacaoFalta) {
            _this.voltar();
        })
            .catch(function (error) { return alert('Ocorreu um erro:' + error); });
    };
    RetifFaltasEditProfPortal.prototype.voltar = function () {
        this.router.parent.navigate(['RetificacaoFaltas']);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', retificacao_falta_1.RetificacaoFalta)
    ], RetifFaltasEditProfPortal.prototype, "retFalta", void 0);
    RetifFaltasEditProfPortal = __decorate([
        core_1.Component({
            templateUrl: 'app/retificacao-faltas/retif-faltas-edit-prof.html',
            providers: [retificacao_faltas_service_1.RetificacaoFaltasService]
        }), 
        __metadata('design:paramtypes', [usuario_service_1.UsuarioService, session_1.Session, router_deprecated_1.Router, router_deprecated_1.RouteParams, retificacao_faltas_service_1.RetificacaoFaltasService])
    ], RetifFaltasEditProfPortal);
    return RetifFaltasEditProfPortal;
}());
exports.RetifFaltasEditProfPortal = RetifFaltasEditProfPortal;
//# sourceMappingURL=retif-faltas-edit-prof.js.map