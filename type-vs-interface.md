# Core Differences Between Type Aliases and Interfaces in TypeScript

## Introduction

Type aliases can describe literal unions, tuples, primitives, and objects. Interfaces generally describe object structures. Both help describe data structures in TypeScript. They improve type safety and make code easier to understand.

## Supported Types

A type alias gives a name to a type. It can represent primitives, literal unions, tuples, and objects.

```ts
type ID = number;
type Role = "admin" | "member";
type Coordinate = [number, number];

type User = {
  name: string;
  role: Role;
};
```

An interface generally describes an object's structure. It cannot directly alias a primitive or union type.

```ts
interface IUser {
  name: string;
  role: Role;
}
```

Here, both `User` and `IUser` describe objects with the same required properties.

## Extending and Combining Types

An interface uses `extends` to build on another interface:

```ts
interface Animal {
  species: string;
}

interface Cat extends Animal {
  breed: string;
}
```

Type aliases can combine requirements using the intersection operator, `&`:

```ts
type Vehicle = {
  brand: string;
};

type Car = Vehicle & {
  model: string;
};
```

A `Cat` requires both `species` and `breed`. Similarly, a `Car` requires both `brand` and `model`.

## Declaration Merging

Compatible interfaces with the same name in the same scope merge their members automatically. Type aliases cannot be redeclared this way.

## Conclusion

I choose an interface for object contracts, especially when extension or declaration merging is useful. I choose a type alias for unions, tuples, primitives, or more complex type combinations.
