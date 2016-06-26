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
var http_1 = require('@angular/http');
var headers_1 = require('../common/headers');
require('rxjs/add/operator/toPromise');
var angular2_jwt_1 = require('angular2-jwt');
var AlunoService = (function () {
    function AlunoService(http, authHttp) {
        this.http = http;
        this.authHttp = authHttp;
        this.baseUrl = 'https://sistemaacademico.azurewebsites.net/api/';
        this.notasUrl = this.baseUrl + 'Boletins/$1';
        this.historicoUrl = this.baseUrl + 'Alunos/$1/Historico';
        this.gradeUrl = this.baseUrl + 'Alunos/$1/GradeCurricular';
    }
    AlunoService.prototype.getNotas = function (matricula) {
        return this.http.get(this.mountUrlWithParam(this.notasUrl, matricula), { headers: headers_1.contentHeaders })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    AlunoService.prototype.getHistoricoEscolar = function (matriculaAluno) {
        return this.http.get(this.mountUrlWithParam(this.historicoUrl, matriculaAluno), { headers: headers_1.contentHeaders })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    AlunoService.prototype.getGradeCurricular = function (matriculaAluno) {
        return this.http.get(this.mountUrlWithParam(this.gradeUrl, matriculaAluno), { headers: headers_1.contentHeaders })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    AlunoService.prototype.handleError = function (error) {
        console.error('Ocorreu um erro!!', error);
        return Promise.reject(error.message || error);
    };
    AlunoService.prototype.extractData = function (res) {
        return res.json();
        //return body.data || { };
    };
    AlunoService.prototype.mountUrlWithParam = function (url, param) {
        if (param) {
            return url.replace('$1', param);
        }
        return url;
    };
    AlunoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, angular2_jwt_1.AuthHttp])
    ], AlunoService);
    return AlunoService;
}());
exports.AlunoService = AlunoService;
//# sourceMappingURL=aluno-service.js.map