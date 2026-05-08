# TypeScript Documentation
Official site: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

---

## Install TypeScript Globally
```
npm install -g typescript
```

## What is Typescript
TypeScript is a superset of JavaScript that adds static typing and compiles to plain JavaScript.


## Why use Typescript
- Adds type safety
- Improves tooling and developer experience
- Helps maintain large projects
- Supports modern JavaScript features

## How to Compile a TypeScript File to JavaScript
```bash
tsc filename.ts
```

## How to Add Restriction if Errors Exist
```
{
  "compilerOptions": {
    "strict": true,
    "noEmitOnError": true
  }
}
```

## 01-basics.ts
Demonstrates **type inference**, **explicit typing**, and what happens when assigning mismatched types.

## 02-vanilla-js-types.js
Shows how JavaScript’s `typeof` operator works to check variable types at runtime.

## 03-flexible-types.ts
Illustrates the `any` type, allowing reassignment to different types and showing its flexibility (and risks).

## 04-arrays-objects.ts
Covers arrays with union types, object typing with nested properties, and the `Record` type for flexible objects.

## 05-enum.ts
Introduces enums, specifically string enums, and shows how to assign `enum` values properly.

## alternative-to-enum.ts
You can just use Literal types, much simple

## custom-type-role.ts
You can create your own custom object that specified all the properties and types

## functions.ts
Learned about call back, void, and never, void don't return any, never just don't finish, usecase of never is for throwing an error

## special-types.ts
null and undefined, null is you defined it at nag asign ka ng "wala" so you can use it later for something, undefined you defined it pero wala ka pang inaasign

## type-narrowing.ts
HTMLelement, and you can use "?" for null safety but if theres is a throw error before that no need to use "?"

## optional.ts
|| and ??, || is meron or falsy, falsy means eto yung mga nagiging false kapag cinonvert mo sa boolean, like 0, "". etc, ?? naman is meron or special types lang, meron or undefined and null