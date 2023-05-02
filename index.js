"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("./src/main");
var Laptop_1 = require("./src/model/product/Laptop");
var TV_1 = require("./src/model/product/TV");
var Phone_1 = require("./src/model/product/Phone");
var user_1 = require("./src/model/user");
var main = new main_1.Main();
var laptop1 = new Laptop_1.Laptop("hp", 2000, "hoas", 16, 'ryzen5', "4", 512);
var laptop = new Laptop_1.Laptop("hp", 2000, "hoas", 16, 'ryzen5', "4", 512);
var laptop2 = new Laptop_1.Laptop("msi", 3000, "hoas", 32, 'ryzen5', "4", 512);
var tv = new TV_1.TV("samsung", 4500, "samsung", 300, true, "fullHD");
var tv1 = new TV_1.TV("LG", 4500, "samsung", 300, true, "fullHD");
var tv2 = new TV_1.TV("Supra", 4500, "samsung", 300, true, "fullHD");
var phone = new Phone_1.Phone("Xiaomi", 750, "xiomi", 7000, 100);
var phone2 = new Phone_1.Phone("Redmi", 750, "xiomi", 7000, 100);
var user = new user_1.User("Shukurullox", "smartboy", "smartboy0507", 70000);
var user2 = new user_1.User("aSkurullox", "fd", "sdsdsdc", 60000);
main.addUser(user, user2);
console.log(main.getUserList());
main.addProduct(laptop, laptop1, tv, tv1, phone, phone2);
// console.log(main.getProductList());
