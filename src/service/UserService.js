"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
var user_1 = require("../model/user");
var UserService = /** @class */ (function () {
    function UserService() {
        this.userList = [];
        this.idGenerator = 0;
    }
    UserService.prototype.checkUsername = function (username) {
        for (var i = 0; i < this.userList.length; i++) {
            if (this.userList[i].getUsername() === username) {
                return true;
            }
        }
        return false;
    };
    UserService.prototype.add = function (user) {
        if (this.checkUsername(user.getUsername())) {
            return false;
        }
        user.setId(this.idGenerator++);
        this.userList.push(user);
        return true;
    };
    UserService.prototype.signUp = function (name, username, password) {
        if (this.checkUsername(username)) {
            throw new Error("User ".concat(username, " already exists"));
        }
        var newUser = new user_1.User(name, username, password, 1000000);
        this.add(newUser);
    };
    UserService.prototype.signIn = function (username, password) {
        for (var _i = 0, _a = this.userList; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.getUsername() === username && user.getPassword() === password) {
                return user;
            }
        }
        return null;
    };
    UserService.prototype.getUserList = function () {
        return this.userList;
    };
    return UserService;
}());
exports.UserService = UserService;
