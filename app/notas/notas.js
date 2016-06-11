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
var NotasPortal = (function () {
    function NotasPortal(alunoService) {
        var _this = this;
        this.alunoService = alunoService;
        this.notas = [];
        this.alunoService.getNotas().then(function (notas) { return _this.notas = notas; });
    }
    NotasPortal = __decorate([
        core_1.Component({
            templateUrl: 'app/notas/notas.html',
            directives: [base_1.BasePage]
        }), 
        __metadata('design:paramtypes', [aluno_service_1.AlunoService])
    ], NotasPortal);
    return NotasPortal;
}());
exports.NotasPortal = NotasPortal;
//# sourceMappingURL=notas.js.map