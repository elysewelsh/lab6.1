// Inside src/models/DigitalProduct.ts, create a DigitalProduct class that extends Product.
// Add a fileSize property (number) for digital products.
// Override the getPriceWithTax() method to calculate a final price with no tax, since the digital products do not require tax.
// Use a getter method to return the formatted file size in megabytes.

import { Product } from "./Product.js"

export class DigitalProduct extends Product {

    constructor(sku: string, name: string, price: number, private fileSize: number) {
        super(sku, name, price);
    }

    get size(): string {
    return `${this.fileSize} MB`;
    }

    getPriceWithTax(): number {
        return this.price;
    }

    override displayDetails(): string {
        return `${super.displayDetails()} is ${this.size}.`;
    }
}