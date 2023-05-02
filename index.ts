import { Main } from "./src/main";
import { Laptop } from "./src/model/product/Laptop";
import { TV } from "./src/model/product/TV";
import { Monitor } from "./src/model/product/Monitor";
import { Phone } from "./src/model/product/Phone";
import { Product } from "./src/model/product/Product";
import { Basket } from "./src/model/basket";
import { User } from "./src/model/user";

const main = new Main();
const laptop1 = new Laptop("hp",2000,"hoas",16,'ryzen5',"4",512)
const laptop = new Laptop("hp",2000,"hoas",16,'ryzen5',"4",512)
const laptop2 = new Laptop("msi",3000,"hoas",32,'ryzen5',"4",512)

const tv = new TV("samsung",4500,"samsung",300,true,"fullHD")
const tv1 = new TV("LG",4500,"samsung",300,true,"fullHD")
const tv2 = new TV("Supra",4500,"samsung",300,true,"fullHD")

const phone = new Phone("Xiaomi",750,"xiomi",7000,100)
const phone2 = new Phone("Redmi",750,"xiomi",7000,100)

const user = new User("Shukurullox","smartboy","smartboy0507",70000)
const user2 = new User("aSkurullox","fd","sdsdsdc",60000)

main.addUser(user,user2)
console.log(main.getUserList());

main.addProduct(laptop,laptop1,tv,tv1,phone,phone2)
// console.log(main.getProductList());

