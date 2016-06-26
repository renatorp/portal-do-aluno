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
var base_1 = require('../base/base');
var session_1 = require('../session/session');
var GradeCurricularPortal = (function () {
    function GradeCurricularPortal(alunoService, session) {
        this.alunoService = alunoService;
        this.session = session;
        this.gradeCurricular = null;
    }
    GradeCurricularPortal.prototype.ngOnInit = function () {
        var _this = this;
        var user = this.session.getCurrentUser();
        if (user && user.IdMatriculaAtual) {
            this.alunoService.getGradeCurricular(user.IdMatriculaAtual).then(function (gradeCurricular) { return _this.gradeCurricular = gradeCurricular; });
        }
    };
    GradeCurricularPortal = __decorate([
        core_1.Component({
            templateUrl: 'app/grade-curricular/grade-curricular.html',
            directives: [base_1.BasePage]
        }), 
        __metadata('design:paramtypes', [aluno_service_1.AlunoService, session_1.Session])
    ], GradeCurricularPortal);
    return GradeCurricularPortal;
}());
exports.GradeCurricularPortal = GradeCurricularPortal;
//# sourceMappingURL=grade-curricular.js.map