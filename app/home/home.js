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
var base_1 = require('../base/base');
var HomePortal = (function () {
    function HomePortal() {
    }
    HomePortal = __decorate([
        core_1.Component({
            template: "\n<base>\n  <content>\n  <div id=\"page-wrapper\">\n<div class=\"container-fluid\">\n\n     <!-- Page Heading -->\n     <div class=\"row\">\n         <div class=\"col-lg-12\">\n             <h1 class=\"page-header\">\n                 Home\n             </h1>\n             <ol class=\"breadcrumb\">\n                 <li class=\"active\">\n                     <i class=\"fa fa-home\"></i> Home\n                 </li>\n             </ol>\n         </div>\n     </div>\n     <!-- /.row -->\n\n</div>\n<!-- /.container-fluid -->\n</div>\n </content>\n<base>\n  ",
            directives: [base_1.BasePage]
        }), 
        __metadata('design:paramtypes', [])
    ], HomePortal);
    return HomePortal;
}());
exports.HomePortal = HomePortal;
//# sourceMappingURL=home.js.map