# removeKeys Utility Function

The `removeKeys` function removes specified keys from an object, returning a new object with those keys omitted. It can handle both single and multiple keys for removal, making it a versatile tool for cleaning up object data.

## 📌 Features

• Removes one or more specified keys from an object.  
• Returns a new object without the specified keys.  
• Supports removing multiple keys at once by passing an array.  
• Ensures immutability by not modifying the original object.

## 🚀 Installation

Since this is a simple utility function, you can include it directly in your project. To use it as a module, you can install it via `pnpm`, `npm`, or `yarn` if packaged as a module in your project.

1. Install the utility using `pnpm`, `npm`, or `yarn`:

```bash
pnpm add @estarlincito/utils
# or
npm install @estarlincito/utils
# or
yarn add @estarlincito/utils
```

2. Import the function in your project:

```ts
import { removeKeys } from '@estarlincito/utils';
```

## ⚡ Usage

The removeKeys function allows you to specify which keys you want to remove from an object, either individually or in groups.

Example 1: Removing a Single Key

```ts
const obj = { a: 'hello', b: 'world' };
const filteredObj = removeKeys(obj, 'a');
console.log(filteredObj); // { b: 'world' }
```

Example 2: Removing Multiple Keys

```ts
const obj = { a: 'hello', b: 'world', c: 'foo' };
const filteredObj = removeKeys(obj, ['a', 'b']);
console.log(filteredObj); // { c: 'foo' }
```

## ❌ Incorrect Usage

```ts
const obj = { a: 'hello', b: 'world' };
const filteredObj = removeKeys([], 'a'); // Error: Argument must be an object, not an array
```

## ✅ Correct Usage

```ts
const obj = { a: 'hello', b: 'world' };
const filteredObj = removeKeys(obj, 'a'); // { b: 'world' }
```

## 🛠 How It Works

• The function accepts an object and a key or keys to remove.
• It uses Object.entries and filter to create a new object with the specified keys excluded.
• The original object remains unchanged, ensuring immutability.
• Supports both single and multiple keys for removal by using arrays.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
