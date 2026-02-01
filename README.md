How does TypeScript enforce type safety in this object-oriented program?

    As one specific example: the weight of a physical product is held only within the PhysicalProduct.ts file. When the weight is used outside of the module, it's actually a re-formatted string from a get function that can only be used within the same module as weight exists because weight is a private value. Weight is a good example for TYPE safety too because, when weight is declared, it's declared as a number, but anywhere you see weight outside of PhysicalProperty, it's a string because of the function to re-format it.

How did inheritance reduce code duplication for PhysicalProduct and DigitalProduct?

    Within the Product module, getPriceWithTax and displayDetails are both defined. PhysicalProduct and DigitalProduct can both inherit those methods, but implement them in their own way. Because the arguments passed into the methods will all be products, no matter the type of product, each module and its methods' parameters don't have to accomodate multiple or the specific type of product. And no additional functions had to be written per module. The existinf methods in Product can just use the argument as an all-encompassing "product".


What are the benefits of using encapsulation and access modifiers (public, private, protected) in this context?

    For this type of project or what this project could be used for, it would allow properties like price and discount from being accessed by users. Those properties would be encapsulated within a class and access modifiers like private and protected would allow limited or no access to the properties that need protecting.

If you had to add a new type of product (e.g., a SubscriptionProduct), how would polymorphism make this extension straightforward?

    Extending the Product with relevant fields and ensuring it has a way to handle the methods defined in Product are all you'd really have to do to ensure products of that type appear in the inventory. If you wanted special functions like an annual discount, you could easily add the logic in the specific module and it wouldn't affect the other product types.
