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
var DisciplinaService = (function () {
    function DisciplinaService(http, authHttp) {
        this.http = http;
        this.authHttp = authHttp;
        this.baseUrl = 'https://sistemaacademico.azurewebsites.net/api/';
        this.disciplinasUrl = this.baseUrl + 'Disciplinas/Matricula/$1';
    }
    DisciplinaService.prototype.getDisciplinasByMatricula = function (matricula) {
        return this.http.get(this.mountUrlWithParam(this.disciplinasUrl, matricula), { headers: headers_1.contentHeaders })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    DisciplinaService.prototype.handleError = function (error) {
        console.error('Ocorreu um erro!!', error);
        return Promise.reject(error.message || error);
    };
    DisciplinaService.prototype.extractData = function (res) {
        return res.json();
        //return body.data || { };
    };
    DisciplinaService.prototype.mountUrlWithParam = function (url, param) {
        if (param) {
            return url.replace('$1', param);
        }
        return url;
    };
    DisciplinaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, angular2_jwt_1.AuthHttp])
    ], DisciplinaService);
    return DisciplinaService;
}());
exports.DisciplinaService = DisciplinaService;
//# sourceMappingURL=disciplina-service.js.map