import { Product } from "../model/product/Product";
import { Monitor } from "../model/product/Monitor";
import { TV } from "../model/product/TV";
import { Laptop } from "../model/product/Laptop";
import { Phone } from "../model/product/Phone";

export class ProductService {
    private productList: Product[] = [];
    private idGenerator = 0

    add(product: Product) {
        product.setId(this.idGenerator++)
        this.productList.push(product)
        return 1
    }
    getById(id: number) {
        for (const product of this.productList) {
            if (product.getId() === id) {
                return product
            }
        }
        return null
    }
    getProductsByType(type: string): Product[] {
        const productsOfType: Product[] = [];
        switch (type) {
            case "TV":{
                for (const product of this.productList) {
                    if(product instanceof TV){
                        productsOfType.push(product)
                    }
                }
            }
            case "Laptop" : {
                for (const product of this.productList) {
                    if(product instanceof Laptop) {
                        productsOfType.push(product);
                    }
                }
            }
            case "Monitor" : {
                for (const product of this.productList) {
                    if(product instanceof Monitor) {
                        productsOfType.push(product);
                    }
                }
            }
            case "Phone" : {
                for (const product of this.productList) {
                    if(product instanceof Phone) {
                        productsOfType.push(product);
                    }
                }
            }
        }
        return productsOfType
    }
    edit(updatedProduct:Product){
        for (let i = 0; i < this.productList.length; i++) {
            if(this.productList[i].getId() === updatedProduct.getId()) {
                this.productList[i] = updatedProduct;
                return 1;
            }
        }
        return 0;
    }
    getProductList(){
        return this.productList
    }
}