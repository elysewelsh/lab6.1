// Inside src/models/PhysicalProduct.ts, create a PhysicalProduct class that extends Product.
// Add a weight property (number) for physical products.
// Override the getPriceWithTax() method to calculate a final price that includes a 10% tax rate.
// Use a getter method to return the formatted weight in kilograms (e.g. “2.5 kg”).

import { Product } from "./Product.js"
import { DiscountableProduct } from "./DiscountableProduct.js"

export class PhysicalProduct extends Product implements DiscountableProduct {

    constructor(sku: string, name: string, price: number, private weight: number, public readonly discount: number = 0, public readonly bulkDiscount: number = 0) {
        super(sku, name, price);
    }
    
    get weightLabel(): string {
        return `${this.weight} kg`;
    }

    applyDiscount(): number {
        let discountedPrice = this.price;
        if (this.bulkDiscount > 0 && this.weight > 3) {
            discountedPrice = this.price * ((100 - this.bulkDiscount)/100);
            if (this.discount > 0) {
                discountedPrice = discountedPrice * ((100 - this.discount)/100);
                return discountedPrice;
            } else {
                return discountedPrice;
            }
        } else {
            if (this.discount > 0) {
                discountedPrice = this.price * ((100 - this.discount)/100);
                return discountedPrice;
            } else {
                return discountedPrice;
            }
        }
    }

    getPriceWithTax(): number {
        return this.applyDiscount() * 1.10;
    }

    override displayDetails (): string {
        if ((this.bulkDiscount > 0) && (this.weight > 3)) {
            if (this.discount > 0) {
                return `${super.displayDetails()} weighs ${this.weightLabel}. A ${this.bulkDiscount}% bulk discount and ${this.discount}% sales discount have been applied.`;
            } else {
                return `${super.displayDetails()} weighs ${this.weightLabel}. A ${this.bulkDiscount}% bulk discount has been applied.`;
            }
        } else {
            if (this.discount > 0) {
                return `${super.displayDetails()} weighs ${this.weightLabel}. A ${this.discount}% sale discount has been applied.`;
            } else {
                return `${super.displayDetails()} weighs ${this.weightLabel}.`;
            }
        }
    }
}