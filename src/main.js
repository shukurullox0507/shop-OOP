"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
var ProductService_1 = require("./service/ProductService");
var UserService_1 = require("./service/UserService");
var Main = /** @class */ (function () {
    function Main() {
        this.userService = new UserService_1.UserService();
        this.productService = new ProductService_1.ProductService();
    }
    Main.prototype.addProduct = function () {
        var products = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            products[_i] = arguments[_i];
        }
        for (var _a = 0, products_1 = products; _a < products_1.length; _a++) {
            var product = products_1[_a];
            this.productService.add(product);
        }
    };
    Main.prototype.addUser = function () {
        var users = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            users[_i] = arguments[_i];
        }
        for (var _a = 0, users_1 = users; _a < users_1.length; _a++) {
            var user = users_1[_a];
            this.userService.add(user);
        }
    };
    Main.prototype.getProductList = function () {
        return this.productService.getProductList();
    };
    Main.prototype.getUserList = function () {
        return this.userService.getUserList();
    };
    Main.prototype.showProduct = function (type) {
        return this.productService.getProductsByType(type);
    };
    Main.prototype.checkAdmin = function (user) {
        return user.getUsername() === "admin";
    };
    Main.prototype.signUp = function (name, username, password) {
        this.userService.signUp(name, username, password);
    };
    Main.prototype.signIn = function (username, password) {
        this.userService.signIn(username, password);
    };
    return Main;
}());
exports.Main = Main;
