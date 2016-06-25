"use strict";
var Session = (function () {
    function Session() {
        this.tokenKey = 'jwt';
        this.userKey = 'currentUser';
    }
    Session.prototype.createSession = function (user, jwtToken) {
        sessionStorage.setItem(this.tokenKey, jwtToken);
        sessionStorage.setItem(this.userKey, JSON.stringify(user));
    };
    Session.prototype.clearSession = function () {
        sessionStorage.removeItem(this.tokenKey);
        sessionStorage.removeItem(this.userKey);
    };
    Session.prototype.getCurrentUser = function () {
        var userJson = sessionStorage.getItem(this.userKey);
        if (userJson != null) {
            return JSON.parse(userJson);
        }
        return null;
    };
    return Session;
}());
exports.Session = Session;
//# sourceMappingURL=session.js.map