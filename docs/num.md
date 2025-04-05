# num Utility Function

The num function provides a simple way to convert a string to a number, ensuring that the input string is a valid number format. It uses the zod library for input validation and parsing.

## 📌 Features

• Converts a string to a number (e.g., "42" becomes 42).  
• Validates that the string is a valid number using the zod library.  
• Throws an error if the string is not a valid number.  
• Supports both integer and floating-point numbers.

## 🚀 Installation

To use this utility in your project, you can install it via pnpm, npm, or yarn if packaged as a module.  
1.Install the utility:

```bash
pnpm add @estarlincito/utils
# or
npm install @estarlincito/utils
# or
yarn add @estarlincito/utils

```

2.Import the function in your project:

```ts
import { num } from '@estarlincito/utils';
```

## ⚡ Usage

The num function allows you to convert a string into a number, ensuring it is a valid number format.

### Example 1: Converting a Valid Number String

```ts
const validNumberString = '42';
const result = num(validNumberString);
console.log(result); // Output: 42
```

### Example 2: Converting a Floating-Point Number String

```ts
const floatString = '3.14';
const result = num(floatString);
console.log(result); // Output: 3.14
```

### Example 3: Handling an Invalid Number String

```ts
const invalidString = 'abc';
try {
  const result = num(invalidString);
} catch (e) {
  console.error(e.message); // Output: Invalid number
}
```

## 🛠 How It Works

• The function accepts a string as input.  
• It uses the zod library to validate the string and ensure it follows a valid number format (including floating-point numbers).  
• If the string matches the format, it is parsed into a number using parseFloat.  
• If the string is not a valid number, the function throws an error with the message “Invalid number”.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.  
**Author:** Estarlin R ( [estarlincito.com](https://estarlincito.com))
