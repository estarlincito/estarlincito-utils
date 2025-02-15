# ObjectUtils Utility Class

The `ObjectUtils` utility class provides methods for manipulating object keys by allowing retrieval or removal of specified keys.

## 📌 Features

• Allows selective retrieval (`getKeys`) or removal (`removeKeys`) of object properties.  
• Supports both single key and multiple keys as an array.  
• Preserves type safety with TypeScript generics.  
• Returns a new object without modifying the original one.

## 🚀 Installation

To use this utility in your project, you can install it via `pnpm`, `npm`, or `yarn` if packaged as a module.

1. Install the utility:

```bash
pnpm add @estarlincito/utils
# or
npm install @estarlincito/utils
# or
yarn add @estarlincito/utils
```

2. Import the class in your project:

```ts
import { ObjectUtils } from '@estarlincito/utils';
```

## ⚡ Usage

The `ObjectUtils` class provides two primary methods:

- `getKeys`: Retrieves the specified keys from an object.
- `removeKeys`: Removes the specified keys from an object.

### Example 1: Retrieving Specific Keys from an Object

```ts
const user = {
  id: 1,
  name: 'Estarlin',
  age: 25,
  email: 'estarlin@example.com',
};

const result = ObjectUtils.getKeys(user, ['name', 'email']);
console.log(result); // Output: { name: 'Estarlin', email: 'estarlin@example.com' }
```

### Example 2: Removing Specific Keys from an Object

```ts
const user = {
  id: 1,
  name: 'Estarlin',
  age: 25,
  email: 'estarlin@example.com',
};

const result = ObjectUtils.removeKeys(user, ['id', 'age']);
console.log(result); // Output: { name: 'Estarlin', email: 'estarlin@example.com' }
```

### Example 3: Handling a Single Key Instead of an Array

```ts
const user = {
  id: 1,
  name: 'Estarlin',
  age: 25,
};

const result = ObjectUtils.getKeys(user, 'name');
console.log(result); // Output: { name: 'Estarlin' }
```

## 🛠 How It Works

• The `generate` private method processes the input object and filters its keys based on the provided operation (`get` or `remove`).  
• The `getKeys` method extracts only the specified keys from an object.  
• The `removeKeys` method excludes the specified keys from an object.  
• The class ensures type safety with TypeScript generics, maintaining proper types for the returned objects.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
