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
// Teste de conexão com servidor via get
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var angular2_jwt_1 = require('angular2-jwt');
var HomePortal = (function () {
    function HomePortal(http, authHttp) {
        this.http = http;
        this.authHttp = authHttp;
    }
    HomePortal.prototype.callSecuredApi = function () {
        var _this = this;
        var url = 'http://localhost:3001/api/protected/random-quote';
        // For protected routes, use AuthHttp
        this.authHttp.get(url)
            .subscribe(function (response) { return _this.response = response.text(); }, function (error) { return _this.response = error.text(); });
    };
    HomePortal = __decorate([
        core_1.Component({
            selector: 'home-portal',
            // Teste de conexão com servidor via get
            directives: [common_1.CORE_DIRECTIVES],
            template: "\n    <h1>Home</h1>\n    <div>\n  <div class=\"home jumbotron centered\">\n    \n    <p>Click any of the buttons to call an API and get a response</p>\n    <p><a class=\"btn btn-primary btn-lg\" role=\"button\" (click)=\"callSecuredApi()\">Call Secure API</a></p>\n    \n    <h2 *ngIf=\"response\">The response of calling the <span class=\"red\">{{api}}</span> API is:</h2>\n    <h3 *ngIf=\"response\">{{response}}</h3>\n  </div>\n</div>\n  ",
        }), 
        __metadata('design:paramtypes', [http_1.Http, angular2_jwt_1.AuthHttp])
    ], HomePortal);
    return HomePortal;
}());
exports.HomePortal = HomePortal;
//# sourceMappingURL=home.js.map