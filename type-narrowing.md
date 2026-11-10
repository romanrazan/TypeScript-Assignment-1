# Type Narrowing in TypeScript

## Introduction

Type narrowing helps TypeScript identify a more specific type through conditions. It is useful when a variable has a union type, because different types support different operations. Checking the value first lets us use the correct properties and methods safely.

## Using `typeof`

The `typeof` operator checks primitive types. In this example, TypeScript identifies `id` as a string inside the first branch and a number inside the second.

```ts
const printId = (id: string | number): string => {
  if (typeof id === "string") {
    return id.toUpperCase();
  }

  return id.toFixed(2);
};
```

## Using `instanceof`

The `instanceof` operator checks whether an object is an instance of a class. Here, it allows a `Date` method to be called safely.

```ts
const formatDate = (value: Date | string): string => {
  if (value instanceof Date) {
    return value.toISOString();
  }
  return value;
};
```

## Using the `in` Operator

The `in` operator checks whether an object has a property. Since only `Bird` has the required `fly` property in this union, the check distinguishes the two cases.

```ts
type Bird = { fly: () => void };
type Fish = { swim: () => void };

const move = (animal: Bird | Fish): void => {
  if ("fly" in animal) {
    animal.fly();
    return;
  }

  animal.swim();
};
```

## Conclusion

Type narrowing makes union types easier to work with. Choose a check that matches the data: `typeof` for primitives, `instanceof` for class instances, and `in` for object properties. These checks help prevent invalid operations while preserving type safety.
