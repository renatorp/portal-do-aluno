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
var RetificacaoFaltasService = (function () {
    function RetificacaoFaltasService(http, authHttp) {
        this.http = http;
        this.authHttp = authHttp;
        this.baseUrl = 'https://sistemaacademico.azurewebsites.net/api/';
        this.buscarSolicitacoesUrl = this.baseUrl + 'RetificacoesFalta';
        this.aprovarRetificacaoUrl = this.baseUrl + 'RetificacoesFalta/$1/Aprovar';
        this.rejeitarRetificacaoUrl = this.baseUrl + 'RetificacoesFalta/$1/Rejeitar';
        this.solicitarRetifFaltaUrl = this.baseUrl + 'RetificacoesFalta';
        this.retificacaoFaltaUrl = this.baseUrl + 'RetificacoesFalta';
        this.buscaRetificacao = this.baseUrl + 'RetificacoesFalta/$1';
    }
    RetificacaoFaltasService.prototype.aprovarRetificacao = function (retificacao) {
        return this.http.put(this.mountUrlWithParam(this.aprovarRetificacaoUrl, retificacao.Id), JSON.stringify(retificacao), { headers: headers_1.contentHeaders })
            .toPromise()
            .then(function (res) { })
            .catch(this.handleError);
    };
    RetificacaoFaltasService.prototype.rejeitarRetificacao = function (retificacao) {
        return this.http.put(this.mountUrlWithParam(this.rejeitarRetificacaoUrl, retificacao.Id), JSON.stringify(retificacao), { headers: headers_1.contentHeaders })
            .toPromise()
            .then(function (res) { })
            .catch(this.handleError);
    };
    RetificacaoFaltasService.prototype.getRetificacaoFaltasById = function (idRetificacao) {
        return this.http.get(this.mountUrlWithParam(this.buscaRetificacao, idRetificacao), { headers: headers_1.contentHeaders })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
        /*return new Promise<RetificacaoFalta>(function(resolve, reject){

            let todasSolicitacoes = null;
            this.getTodasSolicitacoes().then(all => todasSolicitacoes = all);

            if (todasSolicitacoes.length > 0) {
                let solicitacao = todasSolicitacoes.filter(item => item.Id == idRetificacao)[0];
                if (solicitacao) {
                    resolve(solicitacao);
                }
            }

            reject('Solicitação não foi encontrada!');
        }); */
    };
    RetificacaoFaltasService.prototype.getTodasSolicitacoes = function () {
        return this.http.get(this.buscarSolicitacoesUrl, { headers: headers_1.contentHeaders })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    RetificacaoFaltasService.prototype.getRetificacoesFaltasByMatricula = function (matriculaAluno) {
        return this.http.get(this.mountUrlWithParam(this.retificacaoFaltaUrl, matriculaAluno), { headers: headers_1.contentHeaders })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    RetificacaoFaltasService.prototype.solicitarRetificacaoFalta = function (solicitacao) {
        return this.http
            .post(this.solicitarRetifFaltaUrl, JSON.stringify({
            "IdMatricula": solicitacao.IdMatricula,
            "IdOferta": solicitacao.IdOferta,
            "DataFalta": new Date(solicitacao.DataFalta.split("-").join("/")),
            "Justificativa": solicitacao.Justificativa
        }), { headers: headers_1.contentHeaders })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    RetificacaoFaltasService.prototype.handleError = function (error) {
        console.error('Ocorreu um erro!!', error);
        return Promise.reject(error.message || error);
    };
    RetificacaoFaltasService.prototype.extractData = function (res) {
        return res.json();
        //return body.data || { };
    };
    RetificacaoFaltasService.prototype.mountUrlWithParam = function (url, param) {
        if (param) {
            return url.replace('$1', param);
        }
        return url;
    };
    RetificacaoFaltasService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, angular2_jwt_1.AuthHttp])
    ], RetificacaoFaltasService);
    return RetificacaoFaltasService;
}());
exports.RetificacaoFaltasService = RetificacaoFaltasService;
//# sourceMappingURL=retificacao-faltas-service.js.map