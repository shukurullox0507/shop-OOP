
import { ProductService } from "./service/ProductService";
import { UserService } from "./service/UserService";
import { User } from "../src/model/user";
import { Basket } from "../src/model/basket";
import { Laptop } from "../src/model/product/Laptop";
import { Monitor } from "../src/model/product/Monitor";
import { Phone } from "../src/model/product/Phone";
import { TV } from "../src/model/product/TV";
import { Product } from "../src/model/product/Product";

export class Main {
    private userService = new UserService()
    private productService = new ProductService()

    addProduct(...products : Product[]){
        for (const product of products) {
            this.productService.add(product)   
        }
    }
    addUser(...users : User[]){
        for (const user of users) {
            this.userService.add(user)
        }
    }
    getProductList(){
        return this.productService.getProductList()
    }
    getUserList(){
        return this.userService.getUserList()
    }
    showProduct(type:string){
        return this.productService.getProductsByType(type)
    }
    checkAdmin(user: User) {
        return user.getUsername() === "admin";
    }
    signUp(name:string,username:string,password:string) {
        this.userService.signUp(name,username,password)
    }
    signIn(username:string,password:string){
        this.userService.signIn(username,password)
    }

}