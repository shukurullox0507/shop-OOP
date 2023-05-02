"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basket = void 0;
var Basket = /** @class */ (function () {
    function Basket(productId, userId, Id, amount) {
        this.productId = productId;
        this.userId = userId;
        this.Id = Id;
        this.amount = amount;
    }
    Basket.prototype.getId = function () {
        return this.Id;
    };
    Basket.prototype.setId = function (id) {
        this.Id = id;
    };
    Basket.prototype.getProductId = function () {
        return this.productId;
    };
    Basket.prototype.setProductId = function (productId) {
        this.productId = productId;
    };
    Basket.prototype.getUserId = function () {
        return this.userId;
    };
    Basket.prototype.setUserId = function (userId) {
        this.userId = userId;
    };
    Basket.prototype.getAmount = function () {
        return this.amount;
    };
    Basket.prototype.setAmount = function (amount) {
        this.amount = amount;
    };
    return Basket;
}());
exports.Basket = Basket;
