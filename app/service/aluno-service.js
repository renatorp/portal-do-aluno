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
var AlunoService = (function () {
    function AlunoService(http) {
        this.http = http;
        this.notasUrl = 'http://localhost:3001/aluno/nota';
    }
    AlunoService.prototype.getNotas = function () {
        var _this = this;
        return this.http.get(this.notasUrl)
            .subscribe(function (response) { return console.log(response.text()); }, function (error) { return _this.response = error.text(); });
    };
    AlunoService.prototype.handleError = function (error) {
        console.error('Ocorreu um erro!!', error);
        return Promise.reject(error.message || error);
    };
    AlunoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AlunoService);
    return AlunoService;
}());
exports.AlunoService = AlunoService;
//# sourceMappingURL=aluno-service.js.map