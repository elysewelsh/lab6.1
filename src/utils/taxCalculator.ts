// Inside src/utils/taxCalculator.ts, create a utility module to handle tax calculations.
// Add a function calculateTax() that accepts a Product object and returns the price including tax.

import { Product } from "../models/Product.js";

export function calculateTax(product: Product): number {
  const taxedAmount = product.getPriceWithTax();
    return taxedAmount;
}



