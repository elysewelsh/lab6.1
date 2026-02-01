// Inside src/models/Product.ts, create a Product base class with the following:
// Properties: sku (string), name (string), price (number).
// Methods:
// displayDetails() - a method that returns a formatted string with the product’s details.
// getPriceWithTax() - a method that calculates the final price of the product with tax.

export abstract class Product {
    constructor(
        protected sku: string, 
        public readonly name: string, 
        public readonly price: number) {}

    displayDetails(): string {
        return  `${this.name}, SKU: ${this.sku}, costs $${this.price} and`
    }
        
    abstract getPriceWithTax(): number;
}