import { Product } from '../models/Product.js'

export function sortByProperty(inventory:Product[], property: keyof Product): Product[] {
    let sorted = [...inventory].sort((a,b) => {
        if (a[property] < b[property]) return -1;
        if (a[property] > b[property]) return 1;
        return 0;
    });
    return sorted;
}   