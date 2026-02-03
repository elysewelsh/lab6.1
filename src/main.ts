// Inside src/main.ts, import the PhysicalProduct and DigitalProduct classes, and create instances of both.
// Use a loop to display the details of each product, calculate prices with tax, and display the final prices.
// Hint: Utilize polymorphism to your advantage here.

import { Product } from "./models/Product.js"
import { PhysicalProduct } from "./models/PhysicalProduct.js";
import { DigitalProduct } from "./models/DigitalProduct.js";
import { calculateTax } from "./utils/taxCalculator.js";
import { sortByProperty } from "./utils/productSorter.js";

const firstProduct = new PhysicalProduct (
    "9781619493919",
    "Turnip",
    1.26,
    0.23
);

const secondProduct = new DigitalProduct (
    "9780060850524",
    "Biometric Profile",
    345,
    2
);

const thirdProduct = new PhysicalProduct (
    "9780345418913",
    "Towel",
    50.91,
    1,
    25
);

const fourthProduct = new PhysicalProduct (
    "9798721052927",
    "Dirt",
    32,
    5,
    undefined,
    20
);

const fifthProduct = new PhysicalProduct (
    "9789782290052",
    "Flowers",
    5,
    .58,
    undefined,
    30
);

const sixthProduct = new PhysicalProduct (
    "9780810980464",
    "Statuette",
    500,
    22.3,
    10,
    10
);

const inventory: Product[] = [firstProduct, secondProduct, thirdProduct, fourthProduct, fifthProduct, sixthProduct];

// comment out line 60 and uncomment line 63 to simulate an empty inventory
// const inventory: Product[] = [];

console.log(`Welcome to This.Store. There is a sale on towels today!`);
console.log(`Take a look at our catalog:`);
console.log("");
if (inventory.length > 0) {
    inventory.forEach(function (product) {
    console.log(product.displayDetails());
    const finalPrice: number = calculateTax(product);
    console.log(`The final price of ${product.name} with tax is $${finalPrice.toFixed(2)}`);
    console.log("");
    })
} else {
    console.log("We're sold out of everything. Sorry. Bye.");
};

// to sort catalog by price, uncomment lines 80-85
console.log("_______________________________________________________");
console.log("________________CATALOG SORTED BY PRICE________________");
const sortedByPrice: Product[] = sortByProperty(inventory,'price');
sortedByPrice.forEach(function(product) {
    console.log(product.displayDetails());
});

// to sort catalog by name, uncomment lines 88-93
console.log("______________________________________________________");
console.log("________________CATALOG SORTED BY NAME________________");
const sortedByName: Product[] = sortByProperty(inventory,'name');
sortedByName.forEach(function(product) {
    console.log(product.displayDetails());
});