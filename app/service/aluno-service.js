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
require('rxjs/add/operator/toPromise');
var angular2_jwt_1 = require('angular2-jwt');
var AlunoService = (function () {
    function AlunoService(http, authHttp) {
        this.http = http;
        this.authHttp = authHttp;
        this.baseUrl = 'http://localhost:3001/api/protected';
        this.notasUrl = this.baseUrl + '/aluno/nota';
        this.historicoUrl = this.baseUrl + '/aluno/historico';
        this.gradeUrl = this.baseUrl + '/aluno/grade';
    }
    AlunoService.prototype.getNotas = function () {
        return this.authHttp.get(this.notasUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
        /*.subscribe(
          data => this.notas = data,
          error => this.handleError(error.text())
        );
  return this.notas;*/
    };
    AlunoService.prototype.getHistoricoEscolar = function () {
        return this.authHttp.get(this.historicoUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    AlunoService.prototype.getGradeCurricular = function () {
        return this.authHttp.get(this.gradeUrl)
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
    AlunoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, angular2_jwt_1.AuthHttp])
    ], AlunoService);
    return AlunoService;
}());
exports.AlunoService = AlunoService;
//# sourceMappingURL=aluno-service.js.map