# ObjectUtils Class

The ObjectUtils utility class provides methods for manipulating object keys. You can use it to retrieve or remove specified keys from an object, or freeze an object to make it immutable.

## 📌 Features

• Retrieves or removes specified keys from an object.  
• Provides methods for freezing an object to make it immutable.  
• Includes a method to deeply freeze an object to make it read-only.  
• Ensures immutability by returning frozen objects.

## 🚀 Installation

To use this utility in your project, you can install it via pnpm, npm, or yarn if packaged as a module.

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

## Usage

The ObjectUtils class provides the following methods:

- **getKeys**: Retrieves specified keys from an object.
- **removeKeys**: Removes specified keys from an object.
- **create**: Creates a deeply frozen, read-only object.
- **freeze**: Freezes an object to make it immutable.

**Example 1: Retrieving Specific Keys from an Object**

```ts
const obj = { name: 'Estarlin', age: 25, country: 'USA' };
const result = ObjectUtils.getKeys(obj, ['name', 'age']);
console.log(result); // Outputs: { name: "Estarlin", age: 25 }
```

**Example 2: Removing Specific Keys from an Object**

```ts
const obj = { name: 'Estarlin', age: 25, country: 'USA' };
const result = ObjectUtils.removeKeys(obj, 'country');
console.log(result); // Outputs: { name: "Estarlin", age: 25 }
```

**Example 3: Creating a Deeply Frozen Object**

```ts
const obj = { name: 'Estarlin', age: 25 };
const frozenObj = ObjectUtils.create(obj);
console.log(frozenObj.name); // Outputs: "Estarlin"
frozenObj.name = 'John'; // Error: Cannot assign to 'name' because it is a read-only property
```

## 🛠 How It Works

- The generate method is used to either get or remove keys from an object based on the provided method ('get' or 'remove').
- The getKeys method retrieves only the specified keys and returns them in a new object.
- The removeKeys method removes the specified keys from the input object and returns a new object without them.
- The create method deeply freezes the object, making all of its properties immutable.
- The freeze method is used to make objects immutable by freezing them.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.
**Author:** Estarlin R ( [estarlincito.com](https://estarlincito.com))

```

```
