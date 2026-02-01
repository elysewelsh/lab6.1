// Add a DiscountableProduct interface that includes a method applyDiscount(). 
// Implement this interface in one of the product classes.


export interface DiscountableProduct {
    discount?: number;
    bulkDiscount?: number;
    applyDiscount(): void;
}