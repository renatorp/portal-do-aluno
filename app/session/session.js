"use strict";
var Session = (function () {
    function Session() {
        this.tokenKey = 'jwt';
        this.userKey = 'currentUser';
    }
    Session.prototype.createSession = function (user, jwtToken) {
        localStorage.setItem(this.tokenKey, jwtToken);
        localStorage.setItem(this.userKey, JSON.stringify(user));
    };
    Session.prototype.clearSession = function () {
        localStorage.removeItem(this.tokenKey);
        localStorage.removeItem(this.userKey);
    };
    Session.prototype.getCurrentUser = function () {
        return JSON.parse(localStorage.getItem(this.userKey));
    };
    return Session;
}());
exports.Session = Session;
//# sourceMappingURL=session.js.map