"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
var Monitor_1 = require("../model/product/Monitor");
var TV_1 = require("../model/product/TV");
var Laptop_1 = require("../model/product/Laptop");
var Phone_1 = require("../model/product/Phone");
var ProductService = /** @class */ (function () {
    function ProductService() {
        this.productList = [];
        this.idGenerator = 0;
    }
    ProductService.prototype.add = function (product) {
        product.setId(this.idGenerator++);
        this.productList.push(product);
        return 1;
    };
    ProductService.prototype.getById = function (id) {
        for (var _i = 0, _a = this.productList; _i < _a.length; _i++) {
            var product = _a[_i];
            if (product.getId() === id) {
                return product;
            }
        }
        return null;
    };
    ProductService.prototype.getProductsByType = function (type) {
        var productsOfType = [];
        switch (type) {
            case "TV": {
                for (var _i = 0, _a = this.productList; _i < _a.length; _i++) {
                    var product = _a[_i];
                    if (product instanceof TV_1.TV) {
                        productsOfType.push(product);
                    }
                }
            }
            case "Laptop": {
                for (var _b = 0, _c = this.productList; _b < _c.length; _b++) {
                    var product = _c[_b];
                    if (product instanceof Laptop_1.Laptop) {
                        productsOfType.push(product);
                    }
                }
            }
            case "Monitor": {
                for (var _d = 0, _e = this.productList; _d < _e.length; _d++) {
                    var product = _e[_d];
                    if (product instanceof Monitor_1.Monitor) {
                        productsOfType.push(product);
                    }
                }
            }
            case "Phone": {
                for (var _f = 0, _g = this.productList; _f < _g.length; _f++) {
                    var product = _g[_f];
                    if (product instanceof Phone_1.Phone) {
                        productsOfType.push(product);
                    }
                }
            }
        }
        return productsOfType;
    };
    ProductService.prototype.edit = function (updatedProduct) {
        for (var i = 0; i < this.productList.length; i++) {
            if (this.productList[i].getId() === updatedProduct.getId()) {
                this.productList[i] = updatedProduct;
                return 1;
            }
        }
        return 0;
    };
    ProductService.prototype.getProductList = function () {
        return this.productList;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
